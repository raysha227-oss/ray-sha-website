import assert from "node:assert/strict";
const base = process.argv[2] ?? "http://localhost:5173";
const pages = [
  "/",
  "/index",
  "/work",
  "/notes",
  "/about",
  "/work/kirigami",
  "/work/pesticide-dispersion",
];
for (const page of pages) {
  const response = await fetch(new URL(page, base));
  assert.equal(response.status, 200, `${page} must render`);
  const html = await response.text();
  assert.match(html, /<h1\b/, `${page} needs a page heading`);
  const nav = html.match(/<nav\b[\s\S]*?<\/nav>/)?.[0];
  assert.ok(nav, `${page} needs navigation`);
  for (const route of ["/index", "/work", "/notes", "/about"])
    assert.ok(nav.includes(`href="${route}"`), `${page} links to ${route}`);
  assert.ok(!nav.includes('href="/#work"'), "Work should have its own route");
  const counts = [...html.matchAll(/data-photo-count="(\d+)"/g)].map((match) =>
    Number(match[1]),
  );
  assert.ok(
    counts.every((count) => count >= 4),
    `${page} has at least four photos per area`,
  );
  const images = [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(
    (match) => match[1],
  );
  for (const src of new Set(images)) {
    const imageResponse = await fetch(new URL(src, base));
    assert.equal(imageResponse.status, 200, `${src} is available`);
  }
  console.log(
    `${page}: links, ${counts.length} galleries, and ${new Set(images).size} image files passed`,
  );
}
