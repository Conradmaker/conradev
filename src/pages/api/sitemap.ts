import { NextApiRequest, NextApiResponse } from 'next';
import prettier from 'prettier';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const getDate = new Date().toISOString();
  const DOMAIN = 'https://www.conradev.me';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');
  const formatted = (sitemap: string) => prettier.format(sitemap, { parser: 'html' });

  const { data } = await axios.get<{ slug: string; type: number }[]>(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/posts/sitemap`
  );
  const postListSitemap = `
  ${data
    .map(post => {
      return `
        <url>
          <loc>${`${DOMAIN}/${post.type === 1 ? 'insight' : 'dev'}/${post.slug}`}</loc>
          <lastmod>${getDate}</lastmod>
          <priority>1</priority>
        </url>`;
    })
    .join('')}
    `;

  const generatedSitemap = `
	<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${`${DOMAIN}/`}</loc>
      <lastmod>${getDate}</lastmod>
      <priority>1</priority>
    </url>
    <url>
      <loc>${`${DOMAIN}/insight`}</loc>
      <lastmod>${getDate}</lastmod>
      <priority>1</priority>
    </url>
    <url>
      <loc>${`${DOMAIN}/dev`}</loc>
      <lastmod>${getDate}</lastmod>
      <priority>1</priority>
    </url>
    ${postListSitemap}
  </urlset>
`;
  const formattedSitemap = formatted(generatedSitemap);

  res.end(formattedSitemap);
}
