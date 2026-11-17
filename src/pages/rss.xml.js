import rss from '@astrojs/rss';
import { getAllPosts } from '../lib/posts';
import { getSiteSettings } from '../lib/site';

export async function GET(context) {
  const env = context.locals.runtime?.env;
  const posts = await getAllPosts(env, false);
  const siteSettings = await getSiteSettings(env);
  const proto = context.request.headers.get('x-forwarded-proto') || new URL(context.request.url).protocol.replace(':', '');
  const host = context.request.headers.get('x-forwarded-host') || context.request.headers.get('host') || new URL(context.request.url).host;
  const origin = `${proto}://${host}`;

  return rss({
    title: siteSettings.title,
    description: siteSettings.description,
    site: origin,
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.pubDate),
      description: post.description,
      link: `/posts/${post.slug}/`,
    })),
  });
}
