# Blog Post Playbook

Use this when adding future blog posts to Awais Ahmad's portfolio.

## Read First

Read `context.md` before editing. The site is a Vite + React + TypeScript SPA, but GitHub Pages serves static build files from the repo root.

Never commit:

- `.env`
- Gmail app passwords or SMTP secrets
- unrelated untracked files such as temporary screenshots
- `.github/workflows/deploy.yml` unless the GitHub token has workflow permission

## Current Blog Pattern

Main files:

```text
src/data/portfolioData.ts
src/components/Blog.tsx
src/App.tsx
src/components/BlogPostPage.tsx
public/assets/
public/sitemap.xml
public/robots.txt
```

Existing dedicated blog route:

```text
/blog/flutter-state-management-2026
```

## Add A New Blog Post

1. Pick a URL-safe slug:

```text
my-new-blog-post
```

Final URL:

```text
https://awaisahmd.me/blog/my-new-blog-post
```

2. Add the post object in `src/data/portfolioData.ts` inside `blogPostsData`.

Use this shape:

```ts
{
  id: "my-new-blog-post",
  title: "Readable Blog Title",
  summary: "Short SEO-friendly summary.",
  date: "August 24, 2026",
  readTime: "8 min read",
  tags: ["Flutter", "React"],
  category: "Flutter Development",
  views: 100,
  content: `Markdown content here`
}
```

Keep article markdown simple:

- `##` for main sections
- `###` for subsections
- fenced code blocks for code
- normal markdown links
- simple tables only

3. Add or reuse a cover image.

Put source images here:

```text
public/assets/blog-my-new-blog-post.png
```

Use it in React as:

```tsx
<img src="/assets/blog-my-new-blog-post.png" alt="Readable Blog Title" />
```

Vite will copy `public/assets/*` into `dist/assets/*`, and the deploy copy will put it in root `assets/`.

## Route The Post

For a new dedicated page, the shortest safe path is to generalize the existing dedicated post page instead of making one component per post.

If staying with the current one-off pattern:

1. Add the page key to `PAGE_PATHS` in `src/App.tsx`.
2. Add URL detection in `handleUrlChange`.
3. Add a render branch for the page.
4. In `src/components/Blog.tsx`, route that post from `openPost`.
5. Add a route entry folder after build:

```text
blog/my-new-blog-post/index.html
```

If adding several new posts, stop copying the one-off pattern. Create one reusable `BlogPostPage` that accepts a slug and reads `blogPostsData.find((p) => p.id === slug)`.

## Design Rules

Match the existing website:

- dark/light mode support
- max article width around `max-w-3xl`
- cover image first, then category, title, date/read time/views, tags
- readable article body with clear spacing
- code blocks scroll horizontally on mobile
- tables scroll horizontally on mobile
- CTA at the bottom can link to `/contact`

Do not add new dependencies for markdown. The current lightweight parser is enough unless many posts need full markdown support.

## Sitemap And Robots

Update both source and root copies through build/copy:

```text
public/sitemap.xml
public/robots.txt
sitemap.xml
robots.txt
```

Add every public blog URL to `public/sitemap.xml`:

```xml
<url>
  <loc>https://awaisahmd.me/blog/my-new-blog-post</loc>
  <lastmod>2026-08-24</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Google Search Console sitemap name:

```text
sitemap.xml
```

Full sitemap URL:

```text
https://awaisahmd.me/sitemap.xml
```

## Build And Refresh Root Files

Run:

```powershell
npm run lint
npm run build
```

`npm run build` automatically regenerates every route stub (`index.html`, `404.html`, `blog/*/index.html`, `apps/*/index.html`, etc.) with per-page SEO metadata (title, description, canonical, Open Graph) via `scripts/generate-route-stubs.mjs`. New blog posts added to `blogPostsData` get their stub automatically — no manual stub copy needed for posts.

Then copy `dist` to root because GitHub Pages serves this repo from root:

```powershell
$root='C:\Users\QS\Downloads\awais-ahmad-portfolio'
$dist=Join-Path $root 'dist'
Copy-Item -LiteralPath (Join-Path $dist 'index.html') -Destination (Join-Path $root 'index.html') -Force
Copy-Item -LiteralPath (Join-Path $dist 'index.html') -Destination (Join-Path $root '404.html') -Force
Copy-Item -LiteralPath (Join-Path $dist 'resume.pdf') -Destination (Join-Path $root 'resume.pdf') -Force
Copy-Item -LiteralPath (Join-Path $dist 'robots.txt') -Destination (Join-Path $root 'robots.txt') -Force
Copy-Item -LiteralPath (Join-Path $dist 'sitemap.xml') -Destination (Join-Path $root 'sitemap.xml') -Force
Copy-Item -LiteralPath (Join-Path $dist 'assets') -Destination $root -Recurse -Force
foreach ($path in @('blog','projects','contact','terms','privacy','apps\shukar-daily','apps\lumina','apps\packsavvy','blog\my-new-blog-post')) {
  $dir=Join-Path $root $path
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  Copy-Item -LiteralPath (Join-Path $dist 'index.html') -Destination (Join-Path $dir 'index.html') -Force
}
```

Replace `blog\my-new-blog-post` with the new post route.

Remove only stale Vite hashed bundles that are no longer referenced by root `index.html`, for example old `assets/index-*.js` and `assets/index-*.css`. Do not delete screenshots, app icons, privacy pages, or manually added assets.

## Local Check

For local preview:

```powershell
npm run dev
```

Open:

```text
http://localhost:3000/blog/my-new-blog-post
```

Important: `npm run dev` rewrites root `index.html` to dev mode. Before committing, run `npm run build` and refresh root static files again.

## Commit And Push Safely

Check status:

```powershell
git status --short
git diff --check
```

Stage explicit files only. Do not use `git add .` if unrelated untracked files exist.

Example:

```powershell
git add src/data/portfolioData.ts src/App.tsx src/components/Blog.tsx src/components/BlogPostPage.tsx public/assets public/sitemap.xml public/robots.txt sitemap.xml robots.txt index.html 404.html blog/index.html blog/my-new-blog-post/index.html assets
git commit -m "Add my new blog post"
git pull --rebase origin main
git push origin main
```

If `index.html` conflicts during rebase, keep both:

- latest generated asset links from the local build
- any existing Google Search Console verification or Analytics scripts from remote

Then:

```powershell
git add index.html
$env:GIT_EDITOR='true'; git rebase --continue
git push origin main
```
