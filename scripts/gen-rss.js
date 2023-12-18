const fs = require("fs");
const path = require("path");
const RSS = require("rss");
const matter = require("gray-matter");

async function generate() {
  const feed = new RSS({
    title: `sonht's blog - Collection of software development knowledge`,
    site_url: "https://blogs.sonht.io.vn",
    feed_url: "https://blogs.sonht.io.vn/feed.xml",
  });

  const posts = fs.readdirSync(
    path.join(__dirname, "../src", "pages", "posts")
  );

  posts.forEach((name) => {
    if (name.startsWith("index.")) return;

    const content = fs.readFileSync(
      path.join(__dirname, "../src", "pages", "posts", name)
    );
    const frontmatter = matter(content);

    feed.item({
      title: frontmatter.data.title,
      url: "/posts/" + name.replace(/\.mdx?/, ""),
      date: frontmatter.data.date,
      description: frontmatter.data.description,
      categories: frontmatter.data.tag,
      author: frontmatter.data.author,
    });
  });

  fs.writeFileSync("public/feed.xml", feed.xml({ indent: true }));
}

generate();
