import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('posts', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  const index = posts.map((post) => {
    const plainBody = (post.body || '')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/[#>*`_\-\[\]()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 1200);

    return {
      url: `/posts/${post.id}/`,
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
      tags: post.data.tags,
      date: post.data.pubDate.toISOString().slice(0, 10),
      body: plainBody,
    };
  });

  return new Response(JSON.stringify(index), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
}
