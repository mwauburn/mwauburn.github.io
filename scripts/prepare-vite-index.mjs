import { writeFileSync } from 'node:fs';

writeFileSync(
  'index.html',
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Awais Ahmad | Professional App Developer</title>
    <script async preferred-sources-control="manual" src="https://news.google.com/swg/js/v1/publisher.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
);
