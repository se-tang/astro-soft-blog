globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as getSiteSettings, s as saveSiteSettings } from './site_BdBnYs6r.mjs';

const SESSION_COOKIE = "soft_blog_session";
async function getSessionSecret(env) {
  if (env?.SESSION_SECRET) return env.SESSION_SECRET;
  const settings = await getSiteSettings(env);
  if (settings.sessionSecret) return settings.sessionSecret;
  const bytes = new Uint8Array(32);
  crypto.getRandomValues(bytes);
  const generated = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  if (env?.DB) {
    try {
      await saveSiteSettings(env, { sessionSecret: generated });
    } catch {
    }
  }
  return generated;
}
async function hmacHex(secret, data) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}
async function getAdminPassword(env) {
  const settings = await getSiteSettings(env);
  if (settings.adminPassword && settings.adminPassword.trim()) {
    return settings.adminPassword.trim();
  }
  return env?.ADMIN_PASSWORD || "admin123";
}
async function isUsingDefaultPassword(env) {
  return await getAdminPassword(env) === "admin123";
}
async function createSessionToken(env) {
  const secret = await getSessionSecret(env);
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1e3;
  const payload = `admin.${exp}`;
  const sig = await hmacHex(secret, payload);
  return `${payload}.${sig}`;
}
async function verifySessionToken(env, token) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [role, expStr, sig] = parts;
  if (role !== "admin") return false;
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
async function isAuthenticated(cookies, env) {
  const token = cookies.get(SESSION_COOKIE)?.value;
  return verifySessionToken(env, token);
}

export { SESSION_COOKIE as S, isUsingDefaultPassword as a, createSessionToken as c, getAdminPassword as g, isAuthenticated as i };
