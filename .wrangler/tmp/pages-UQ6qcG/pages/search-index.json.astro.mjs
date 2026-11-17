globalThis.process ??= {}; globalThis.process.env ??= {};
import { a as getAllPosts } from '../chunks/posts_eqsJ4eKJ.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const env = context.locals.runtime?.env;
  const posts = await getAllPosts(env, false);

  const index = posts.map((post) => {
    const plainBody = (post.content || '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/[#>*`_\-\[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 1200);

    return {
      url: `/posts/${post.slug}/`,
      title: post.title,
      description: post.description,
      category: post.category,
      tags: post.tags,
      date: post.pubDate,
      body: plainBody,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-cache',
    },
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
