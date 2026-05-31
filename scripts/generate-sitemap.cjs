const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.nanomachinemanga.online';

const mangaData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../public/scraped_k5ak9c-nano-machine.json'), 'utf-8')
);

const SERIES_START = new Date('2020-01-31T00:00:00Z').getTime();
const NOW = new Date().getTime();
const TODAY = new Date().toISOString().split('T')[0];

const sortedChapters = [...mangaData.chapters].sort((a, b) => a.chapter_number - b.chapter_number);
const totalChapters = sortedChapters.length;

// Build chapter list with release dates interpolated between SERIES_START and NOW
const chapters = sortedChapters.map((ch, index) => {
  const fraction = totalChapters > 1 ? index / (totalChapters - 1) : 1;
  const releaseTime = SERIES_START + (NOW - SERIES_START) * fraction;
  return {
    number: ch.chapter_number,
    releaseDate: new Date(releaseTime).toISOString().split('T')[0],
  };
});

const pages = [
  '',
  '/manga',
  '/characters',
  '/privacy',
  '/dmca',
  '/disclaimer',
  '/about',
  '/terms'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static pages
pages.forEach(page => {
  sitemap += `  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Add chapters
chapters.forEach(ch => {
  sitemap += `  <url>
    <loc>${DOMAIN}/chapter/${ch.number}</loc>
    <lastmod>${ch.releaseDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
console.log(`Sitemap generated at ${path.join(publicDir, 'sitemap.xml')} with ${pages.length + chapters.length} URLs`);
