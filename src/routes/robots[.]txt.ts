export const GET = () => {
  const body = `User-agent: *\nAllow: /\nSitemap: https://technicallydominion.space/sitemap.xml`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    }
  });
};