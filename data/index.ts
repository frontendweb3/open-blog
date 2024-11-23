import { posts as allPosts } from "@/data/posts"
import type { Posts } from "@/type";

// Home Page
export function GetAllPosts() {
  return allPosts
}

// Read page 
export function GetPost(slug: string) {
  return allPosts.find((post) => post.slug === slug)
}

// Author 
export async function GetAuthorsPost(slug: string) {

  const AuthorList: Posts[] = []

  allPosts.map((post) => {
    if (post.author !== undefined) {
      if (post.author.toLowerCase().trim().split(" ").join("-") === slug) {
        AuthorList.push(post)
      }
    }
  })

  return AuthorList
}

// Author Page
export async function GetAuthors() {

  const AuthorList: { slug: string; }[] = []

  allPosts.map((post) => {
    if (post.author !== undefined) {
      let formatAuthor = post.author.toLowerCase().trim().split(" ").join("-")
      if (formatAuthor) {
        AuthorList.push({ slug: formatAuthor })
      }
    }
  })
  return AuthorList
}


// Tag Page
export async function GetTagsPost(slug: string) {

  const TagPosts: Posts[] = []

  allPosts.map((post) => {
    if (post.tags !== undefined) {
      post.tags.filter(tag => {
        if (tag.toLowerCase().trim().split(" ").join("-") === slug) {
          TagPosts.push(post)
        }
      })
    }
  })

  return TagPosts

}
// Tag Page
export async function GetTags() {

  const TagsList: { slug: string; }[] = []

  allPosts.map((post) => {
    if (post.tags !== undefined) {
      post.tags.filter(tag => {
        let formatTag = tag.toLowerCase().trim().split(" ").join("-")
        if (formatTag) {
          TagsList.push({ slug: formatTag })
        }
      })
    }
  })
  return TagsList
}
