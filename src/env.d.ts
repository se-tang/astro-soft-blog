/// <reference types="astro/client" />
import type { Runtime } from '@astrojs/cloudflare';

type Env = {
  DB?: D1Database;
  ADMIN_PASSWORD?: string;
  SESSION_SECRET?: string;
};

declare namespace App {
  interface Locals extends Runtime<Env> {}
}
