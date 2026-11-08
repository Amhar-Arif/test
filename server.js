/**
 * Lightweight local static server (mirrors AWS S3 Static Website Hosting behavior:
 * serves index.html at root and 404.html on missing routes).
 */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = Number(process.env.PORT) || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const safeUrl = decodeURIComponent((req.url || '/').split('?')[0]);
  const relativePath = safeUrl === '/' ? 'index.html' : safeUrl.replace(/^\/+/, '');
  const filePath = path.resolve(ROOT, relativePath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    const notFoundPath = path.join(ROOT, '404.html');
    fs.readFile(notFoundPath, (err404, content) => {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(err404 ? '404 Not Found' : content);
    });
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Serendib Sri Lanka Static Server running at http://localhost:${PORT}`);
});
