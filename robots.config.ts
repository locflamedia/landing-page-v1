import { NodeIncomingMessage } from "h3";

export default [
  { Comment: "Robots.txt" },
  { UserAgent: () => ["*"] },
  { Allow: "/" },
  { Disallow: "/admin" },
  { BlankLine: true },
  {
    Sitemap: (req: NodeIncomingMessage) =>
      `https://${req.headers.host}/sitemap.xml`,
  },
];
