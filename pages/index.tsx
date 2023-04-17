import Card from "@/components/Card"
import Pagination from "@/components/Pagination"
import { posts } from "@/data/posts";
import { type Posts } from "@/type";

export default function Home() {
  return (
    <>
      <main className="container my-12 mx-auto grid grid-cols-1 gap-2 md:gap-3 lg:gap-4 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">

        {
          posts.map((item: Posts) => <Card key={item.id} item={item} />)
        }

      </main>

      <Pagination />

    </>
  )
}
