import { BlogCard } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Pagination } from "@/components/Pagination";
import { GetAllPosts } from "@/data";
import type { Posts } from "@/type";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Open Blog",
  description:
    "The Open Blog is a open source template is design and built with Next.js 15, Shadcn UI and tailwind CSS.",
};
export default function Home() {
  const allPosts = GetAllPosts();
  return (
    <>
      <Hero />
      <section className="mx-auto my-8 max-w-6xl py-10">
        <h2
          id="latest-article"
          className="cursor-auto scroll-m-10 px-4 py-2 text-xl font-bold transition"
        >
          Read Our Latest Article
        </h2>
      </section>

      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2">
        {allPosts.map((item: Posts) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>
      <Pagination />
    </>
  );
}
