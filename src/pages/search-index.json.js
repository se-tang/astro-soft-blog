import { getAllPosts } from '../lib/posts';

export async function GET(context) {
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
