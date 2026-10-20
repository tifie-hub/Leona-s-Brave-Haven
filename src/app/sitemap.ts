import type { MetadataRoute } from "next";
import { dogs } from "@/lib/dogs";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/our-story",
    "/meet-the-dogs",
    "/rescue-stories",
    "/foster-and-volunteer",
    "/events",
    "/contact",
    "/faq",
    "/privacy",
    "/donation-policy",
  ];

  const pages = routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: route === "" || route === "/meet-the-dogs" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const profiles = dogs.map((dog) => ({
    url: `${site.url}/meet-the-dogs/${dog.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...pages, ...profiles];
}
