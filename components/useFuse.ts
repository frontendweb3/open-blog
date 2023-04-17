import Fuse from "fuse.js";
import { posts } from "@/data/posts";

const options = {
  includeScore: true,
  keys: ['title', 'description', 'author']
}
const fuse = new Fuse(posts, options)

export function searchWithFuse(query: string) {
  if (!query) {
    return [];
  }

  return fuse.search(query)
}


