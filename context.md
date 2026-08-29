# Portfolio Project Context

## Project

This is Awais Ahmad's portfolio website.

Local path:

```text
C:\Users\QS\Downloads\awais-ahmad-portfolio
```

Git remote:

```text
https://github.com/mwauburn/mwauburn.github.io.git
```

Branch:

```text
main
```

Custom domain:

```text
awaisahmd.me
```

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Express backend in `server.ts` for local/API experiments
- Web3Forms for static contact form emails on GitHub Pages

Important commands:

```powershell
npm run lint
npm run build
git status --short
git push origin main
```

## Current Routing

The site is a React single page app using internal page state, but it now supports clean URLs.

Main URLs:

```text
/
/blog
/projects
/contact
/terms
/privacy
/apps/shukar-daily
/apps/lumina
/apps/packprep
```

Old hash links such as `/#projects` and `/#blog` are still supported as fallback.

GitHub Pages serves static files from the repo root. After every build, copy the `dist` output to root and keep route entry files:

```text
index.html
404.html
blog/index.html
projects/index.html
contact/index.html
terms/index.html
privacy/index.html
apps/shukar-daily/index.html
apps/lumina/index.html
apps/packprep/index.html
assets/
resume.pdf
```

The route `index.html` files are copies of `dist/index.html`.

## Deployment Notes

Do not add a GitHub Actions workflow unless the GitHub token has workflow permission. A previous push failed because `.github/workflows/deploy.yml` required workflow scope.

Manual deploy flow:

```powershell
npm run lint
npm run build
```

Then copy the build files into the repo root before committing:

```powershell
$root='C:\Users\QS\Downloads\awais-ahmad-portfolio'
$dist=Join-Path $root 'dist'
Copy-Item -LiteralPath (Join-Path $dist 'index.html') -Destination (Join-Path $root 'index.html') -Force
Copy-Item -LiteralPath (Join-Path $dist 'index.html') -Destination (Join-Path $root '404.html') -Force
Copy-Item -LiteralPath (Join-Path $dist 'resume.pdf') -Destination (Join-Path $root 'resume.pdf') -Force
Copy-Item -LiteralPath (Join-Path $dist 'assets') -Destination $root -Recurse -Force
foreach ($path in @('blog','projects','contact','terms','privacy','apps\shukar-daily','apps\lumina','apps\packprep','apps\packsavvy')) {
  $dir=Join-Path $root $path
  New-Item -ItemType Directory -Force -Path $dir | Out-Null
  Copy-Item -LiteralPath (Join-Path $dist 'index.html') -Destination (Join-Path $dir 'index.html') -Force
}
```

Remove old generated assets that are no longer referenced by root `index.html` before committing.

## Contact Form Email

The contact forms submit to:

```text
https://api.web3forms.com/submit
```

Static form provider:

```text
Web3Forms
```

The public access key is embedded in the React contact forms because GitHub Pages cannot read private environment variables at runtime.

Current access key:

```text
9c6b543e-e2c8-4cf2-a0da-7942d7d061c3
```

Important: GitHub Pages is static and cannot run `server.ts`, so production contact email must use Web3Forms or another static-form provider.

## Resume

Resume file is served from:

```text
/resume.pdf
```

Source/public copy:

```text
public/resume.pdf
```

Root GitHub Pages copy:

```text
resume.pdf
```

The About section resume button points to `/resume.pdf`.

## App Assets

App icons:

```text
public/app-icons/shukar-daily.png
public/app-icons/lumina.png
public/app-icons/packsavvy.png
```

Screenshots:

```text
public/screens/
```

Root copies for GitHub Pages:

```text
app-icons/
screens/
```

App privacy pages:

```text
public/privacy/shukar-daily-privacy-policy.html
public/privacy/lumina-privacy-policy.html
public/privacy/packprep-privacy-policy.html
```

Root copies:

```text
privacy/shukar-daily-privacy-policy.html
privacy/lumina-privacy-policy.html
privacy/packprep-privacy-policy.html
```

Privacy policy contact email should stay:

```text
leonicxapp@gmail.com
```

Only app privacy pages use that email. Do not replace the whole portfolio email with it.

## Main Source Files

Routing and page selection:

```text
src/App.tsx
```

Header navigation and theme toggle:

```text
src/components/Header.tsx
```

Home sections:

```text
src/components/Hero.tsx
src/components/About.tsx
src/components/Experience.tsx
src/components/Skills.tsx
src/components/Projects.tsx
src/components/TheWall.tsx
src/components/Achievements.tsx
src/components/Contributions.tsx
src/components/Misc.tsx
src/components/Connect.tsx
```

Separate pages:

```text
src/components/Blog.tsx
src/components/ProjectsGallery.tsx
src/components/ContactPage.tsx
src/components/TermsOfUse.tsx
src/components/PrivacyPolicy.tsx
```

App detail pages:

```text
src/components/AppDetailTemplate.tsx
src/components/ShukarDailyDetail.tsx
src/components/LuminaDetail.tsx
src/components/PacksavvyDetail.tsx
```

Data:

```text
src/data/portfolioData.ts
```

## Current Important Behavior

- Whole project cards are clickable and open app detail pages.
- Shukar Daily app page includes the Google Play link:

```text
https://play.google.com/store/apps/details?id=com.shukrdaily.shukar_daily
```

- Contact and Blog pages support light/dark mode.
- Location text was changed from Oman to Pakistan.
- Skills use original language/tool icons.
- Projects page shows only:

```text
Shukar Daily
Lumina
PackPrep
```

## Safety Notes

- Do not push `.env`.
- Do not expose Gmail App Passwords in commits.
- Do not re-add `.github/workflows/deploy.yml` unless GitHub permissions are fixed.
- Build output in root is intentional because GitHub Pages serves from root.
- After changing source, always run `npm run lint` and `npm run build`, then refresh root static files before pushing.
