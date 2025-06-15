import { GetAllPosts } from "@/data";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = GetAllPosts();
  const getURL = process.env.BASE_URL && "http://localhost:3000";

  return allPosts.map((post) => {
    return {
      url: `${getURL}/read/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "weekly",
      priority: 1,
      images: [post.image],
    };
  });
}
