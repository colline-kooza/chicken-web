export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://flako-ltd.vercel.app/sitemap.xml",
  };
}
