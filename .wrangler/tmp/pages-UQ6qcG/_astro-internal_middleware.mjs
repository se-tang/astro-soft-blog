globalThis.process ??= {}; globalThis.process.env ??= {};
import './chunks/astro-designed-error-pages_D6gcmd-Z.mjs';
import './chunks/astro/server_D9ASRNIz.mjs';
import { s as sequence } from './chunks/render-context_DY6sqw4H.mjs';

const onRequest$1 = (context, next) => {
  if (context.isPrerendered) {
    context.locals.runtime ??= {
      env: process.env
    };
  }
  return next();
};

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
