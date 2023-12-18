const fs = require("fs");
const path = require("path");

const url = "https://blogs.sonht.io.vn";

function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

async function generateSitemap() {
  const pages = fs
    .readdirSync(path.join(__dirname, "../src", "pages"), { recursive: true })
    .filter((pageName) => /.mdx/.test(pageName))
    .filter((pageName) => !pageName.includes("[tag]"));

  const lastmod = formatDateToYYYYMMDD(new Date());

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((pageName) => {
        if (pageName.includes("index.")) {
          return `<url>
            <loc>${url}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>`;
        }

        return `<url>
          <loc>${url}/${pageName.replace(/\.mdx?/, "")}</loc>
          <lastmod>${lastmod}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>`;
      })
      .join("\n")}
  </urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
