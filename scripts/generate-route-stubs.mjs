/**
 * Generates route entry files (SPA stubs) with per-page SEO metadata.
 *
 * GitHub Pages serves this repo from root, so each clean URL needs an
 * index.html stub. Every stub used to be a verbatim copy of dist/index.html
 * with the same generic <title> and no meta description. This script injects
 * per-page <title>, meta description, canonical URL, Open Graph and Twitter
 * tags into each stub.
 *
 * Blog post metadata is read from src/data/portfolioData.ts (bundled with
 * esbuild), so new posts are picked up automatically.
 *
 * Runs as part of `npm run build`.
 */
import esbuild from 'esbuild';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = path.resolve(process.cwd());
const SITE = 'https://awaisahmd.me';
const SITE_NAME = 'Awais Ahmad Portfolio';
const DEFAULT_TITLE = 'Awais Ahmad | Professional App Developer';
const HOME_DESCRIPTION =
  'Portfolio of Awais Ahmad — Flutter and mobile app developer building high-performance, AI-powered apps. Explore projects, articles, and get in touch.';

// ---------------------------------------------------------------------------
// Static routes: stub path -> SEO metadata
// ---------------------------------------------------------------------------
const STATIC_ROUTES = [
  {
    stub: 'index.html', // home
    title: DEFAULT_TITLE,
    description: HOME_DESCRIPTION,
    url: '/',
  },
  {
    stub: 'blog/index.html',
    title: 'Blog | Awais Ahmad — Flutter & Mobile App Development',
    description:
      'Technical articles by Awais Ahmad on Flutter development: state management, clean architecture, AI integration, AI agents, and MCP servers.',
    url: '/blog/',
  },
  {
    stub: 'projects/index.html',
    title: 'Projects | Awais Ahmad — Mobile Apps by a Flutter Developer',
    description:
      'Explore mobile apps built by Awais Ahmad: Shukar Daily gratitude journal, Lumina ingredient scanner, PackPrep travel packing, and more.',
    url: '/projects/',
  },
  {
    stub: 'contact/index.html',
    title: 'Contact | Awais Ahmad — Flutter App Developer',
    description:
      'Get in touch with Awais Ahmad for Flutter and mobile app development projects, collaborations, or consultations.',
    url: '/contact/',
  },
  {
    stub: 'terms/index.html',
    title: 'Terms of Use | Awais Ahmad',
    description: 'Terms of use for the Awais Ahmad portfolio website.',
    url: '/terms/',
  },
  {
    stub: 'privacy/index.html',
    title: 'Privacy Policy | Awais Ahmad',
    description: 'How the Awais Ahmad portfolio website handles data, cookies, and user privacy.',
    url: '/privacy/',
  },
  {
    stub: path.join('apps', 'shukar-daily', 'index.html'),
    title: 'Shukar Daily — Islamic Gratitude Journal & Counter App | Awais Ahmad',
    description:
      'Shukar Daily is an offline-first Islamic gratitude journal and dhikr counter app by Awais Ahmad. Available on Google Play.',
    url: '/apps/shukar-daily/',
    image: '/app-icons/shukar-daily.png',
  },
  {
    stub: path.join('apps', 'lumina', 'index.html'),
    title: 'Lumina — Cosmetic Ingredient Scanner & Skin Safety App | Awais Ahmad',
    description:
      'Lumina scans cosmetic ingredients and analyzes skin safety in seconds. A Flutter app by Awais Ahmad.',
    url: '/apps/lumina/',
    image: '/app-icons/lumina.png',
  },
  {
    // PackPrep page (canonical URL used by the app itself)
    stub: path.join('apps', 'packprep', 'index.html'),
    title: 'PackPrep — Travel Packing List & Trip Planning App | Awais Ahmad',
    description:
      'PackPrep builds smart travel packing lists and plans trips with ease. A Flutter app by Awais Ahmad.',
    url: '/apps/packprep/',
    image: '/app-icons/packsavvy.png',
  },
  {
    // /apps/packsavvy serves the same page as /apps/packprep; canonical points
    // at the packprep URL so search engines consolidate the duplicate.
    stub: path.join('apps', 'packsavvy', 'index.html'),
    title: 'PackPrep — Travel Packing List & Trip Planning App | Awais Ahmad',
    description:
      'PackPrep builds smart travel packing lists and plans trips with ease. A Flutter app by Awais Ahmad.',
    url: '/apps/packprep/',
    image: '/app-icons/packsavvy.png',
  },
  {
    // 404.html is the SPA fallback; it renders the home page for unknown URLs.
    stub: '404.html',
    title: DEFAULT_TITLE,
    description: HOME_DESCRIPTION,
    url: '/',
  },
];

// ---------------------------------------------------------------------------
// Load blog posts from src/data/portfolioData.ts via esbuild
// ---------------------------------------------------------------------------
async function loadBlogPosts() {
  const result = await esbuild.build({
    entryPoints: [path.join(ROOT, 'src', 'data', 'portfolioData.ts')],
    bundle: true,
    format: 'esm',
    write: false,
    logLevel: 'silent',
  });
  const tmp = path.join(os.tmpdir(), `portfolio-data-${Date.now()}-${process.pid}.mjs`);
  fs.writeFileSync(tmp, result.outputFiles[0].text);
  try {
    const mod = await import(pathToFileURL(tmp).href);
    return mod.blogPostsData ?? [];
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

// ---------------------------------------------------------------------------
// HTML head injection
// ---------------------------------------------------------------------------
const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function buildHeadTags({ title, description, url, ogType = 'website', image }) {
  const lines = [
    `<title>${escapeAttr(title)}</title>`,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    `<link rel="canonical" href="${escapeAttr(SITE + url)}" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:type" content="${escapeAttr(ogType)}" />`,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    `<meta property="og:url" content="${escapeAttr(SITE + url)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
  ];
  if (image) {
    lines.push(`<meta property="og:image" content="${escapeAttr(SITE + image)}" />`);
    lines.push(`<meta name="twitter:image" content="${escapeAttr(SITE + image)}" />`);
  }
  return lines.join('\n    ');
}

function injectMeta(templateHtml, meta) {
  // Idempotent: remove any previously generated block before injecting.
  let html = templateHtml.replace(/[ \t]*<!-- seo:generated -->[\s\S]*?<!-- \/seo:generated -->\n?/g, '');
  const tags = buildHeadTags(meta);
  const block = `    <!-- seo:generated -->\n    ${tags}\n    <!-- /seo:generated -->`;
  const titleRegex = /[ \t]*<title>[\s\S]*?<\/title>/;
  if (!titleRegex.test(html)) {
    throw new Error('dist/index.html template has no <title> tag to replace');
  }
  return html.replace(titleRegex, block);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  const templatePath = path.join(ROOT, 'dist', 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Template not found: ${templatePath}. Run "vite build" first.`);
  }
  const template = fs.readFileSync(templatePath, 'utf8');

  const posts = await loadBlogPosts();
  const blogRoutes = posts.map((post) => ({
    stub: path.join('blog', post.id, 'index.html'),
    title: `${post.title} | Awais Ahmad`,
    description: post.summary,
    url: `/blog/${post.id}/`,
    ogType: 'article',
    image: `/assets/blog-${post.id}.png`,
  }));

  const routes = [...STATIC_ROUTES, ...blogRoutes];
  const written = [];

  for (const route of routes) {
    const outPath = path.join(ROOT, route.stub);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, injectMeta(template, route), 'utf8');
    written.push(route.stub);
  }

  // Keep dist/index.html in sync (home metadata) so "copy dist to root" flows
  // that grab dist/index.html directly also get the SEO tags.
  fs.writeFileSync(templatePath, injectMeta(template, STATIC_ROUTES[0]), 'utf8');

  console.log(`[route-stubs] Wrote ${written.length} route files with per-page SEO metadata:`);
  for (const file of written) console.log(`  - ${file}`);
}

main().catch((error) => {
  console.error('[route-stubs] Failed:', error.message);
  process.exit(1);
});

