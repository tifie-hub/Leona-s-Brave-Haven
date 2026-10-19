import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/our-story",
    "/meet-the-dogs",
    "/rescue-stories",
    "/donate",
    "/foster-and-volunteer",
    "/events",
    "/contact",
    "/faq",
    "/privacy",
    "/donation-policy",
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" || route === "/donate" ? 1 : 0.7,
  }));
}
