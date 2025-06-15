import { BlogCard } from "@/components/Card";
import { GetTags, GetTagsPost } from "@/data";
import type { Posts } from "@/type";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Articles Related to ${slug?.trim().replaceAll(" ", "-")}` };
}

export async function generateStaticParams() {
  return GetTags();
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const posts = await GetTagsPost(slug);
  if (posts.length === 0) {
    notFound();
  }
  return (
    <>
      <section className="mx-auto my-8 max-w-6xl py-10">
        <h2 className="px-4 py-2 text-xl font-bold capitalize transition">
          Articles Related to {slug}
        </h2>
      </section>
      <div className="container mt-12 mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((item: Posts) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
