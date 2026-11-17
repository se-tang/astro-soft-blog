export async function onRequestGet(context) {
  const response = await context.env.ASSETS.fetch(context.request);
  const origin = new URL(context.request.url).origin;
  const body = (await response.text()).replaceAll('https://__site_origin__', origin);

  return new Response(body, {
    status: response.status,
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=300',
    },
  });
}
