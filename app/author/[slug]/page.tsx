import { BlogCard } from "@/components/Card";
import { GetAuthors, GetAuthorsPost } from "@/data";
import type { Posts } from "@/type";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Published By ${slug?.trim().replaceAll(" ", "-")}` };
}

export async function generateStaticParams() {
  return GetAuthors();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = await GetAuthorsPost(slug);
  if (posts.length === 0) {
    notFound();
  }
  return (
    <>
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold capitalize">
          Articles Published By {slug.toLowerCase().trim().split("-").join(" ")}
        </h2>
      </div>

      <main className="container mx-auto my-12 grid grid-cols-1 gap-2 p-2 py-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-4">
        {posts.map((item: Posts) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}
