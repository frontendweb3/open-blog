import { Card } from "@/components/Card"
import { Pagination } from "@/components/Pagination"
import { GetAllPosts } from "@/data";
import type { Posts } from "@/type";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Open Blog",
  description: "The Open Blog is a open source template is design and built with Next.js 15, Shadcn UI and tailwind CSS.",
};


export default function Home() {
  const allPosts = GetAllPosts()
  return (
    <>
      <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
        {
          allPosts.map((item: Posts) => <Card key={item.id} item={item} />)
        }
      </main>
      <Pagination />
    </>
  )
}
