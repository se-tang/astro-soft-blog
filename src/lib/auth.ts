import type { AstroCookies } from 'astro';
import type { RuntimeEnv } from './db';
import { getSiteSettings, saveSiteSettings } from './site';

export const SESSION_COOKIE = 'soft_blog_session';

async function getSessionSecret(env?: RuntimeEnv): Promise<string> {
  if (env?.SESSION_SECRET) return env.SESSION_SECRET;
  const settings = await getSiteSettings(env);
  if (settings.sessionSecret) return settings.sessionSecret;

  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const generated = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
  if (env?.DB) {
    try {
      await saveSiteSettings(env, { sessionSecret: generated });
    } catch {}
  }
  return generated;
}

async function hmacHex(secret: string, data: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('');
}

export async function getAdminPassword(env?: RuntimeEnv): Promise<string> {
  const settings = await getSiteSettings(env);
  if (settings.adminPassword && settings.adminPassword.trim()) {
    return settings.adminPassword.trim();
  }
  return env?.ADMIN_PASSWORD || 'admin123';
}

export async function isUsingDefaultPassword(env?: RuntimeEnv): Promise<boolean> {
  return (await getAdminPassword(env)) === 'admin123';
}

export async function createSessionToken(env?: RuntimeEnv): Promise<string> {
  const secret = await getSessionSecret(env);
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = `admin.${exp}`;
  const sig = await hmacHex(secret, payload);
  return `${payload}.${sig}`;
}

export async function verifySessionToken(env: RuntimeEnv | undefined, token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [role, expStr, sig] = parts;
  if (role !== 'admin') return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;

  const secret = await getSessionSecret(env);
  const expected = await hmacHex(secret, `${role}.${expStr}`);
  if (sig.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) {
    diff |= sig.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export async function isAuthenticated(cookies: AstroCookies, env?: RuntimeEnv): Promise<boolean> {
  const token = cookies.get(SESSION_COOKIE)?.value;
  return verifySessionToken(env, token);
}
