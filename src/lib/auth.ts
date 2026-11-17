import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import type { AstroCookies } from 'astro';
import { getSiteSettings } from './site';

const DATA_DIR = path.resolve(process.cwd(), 'data');
const SECRET_FILE = path.join(DATA_DIR, '.session_secret');
export const SESSION_COOKIE = 'soft_blog_session';

function getSessionSecret(): string {
  if (process.env.SESSION_SECRET) return process.env.SESSION_SECRET;
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (fs.existsSync(SECRET_FILE)) {
    return fs.readFileSync(SECRET_FILE, 'utf-8').trim();
  }
  const secret = crypto.randomBytes(32).toString('hex');
  fs.writeFileSync(SECRET_FILE, secret, 'utf-8');
  return secret;
}

export function getAdminPassword(): string {
  const settings = getSiteSettings();
  if (settings.adminPassword && settings.adminPassword.trim()) {
    return settings.adminPassword.trim();
  }
  return process.env.ADMIN_PASSWORD || 'admin123';
}

export function isUsingDefaultPassword(): boolean {
  return getAdminPassword() === 'admin123';
}

export function createSessionToken(): string {
  const secret = getSessionSecret();
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000;
  const payload = `admin.${exp}`;
  const sig = crypto.createHmac('sha256', secret).update(payload).digest('hex');
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [role, expStr, sig] = parts;
  if (role !== 'admin') return false;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || Date.now() > exp) return false;

  const secret = getSessionSecret();
  const expected = crypto.createHmac('sha256', secret).update(`${role}.${expStr}`).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function isAuthenticated(cookies: AstroCookies): boolean {
  const token = cookies.get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}
