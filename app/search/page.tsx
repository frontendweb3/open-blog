"use client";

import React, { useDeferredValue, useState } from "react";
import { BlogCard } from "@/components/Card";
import { searchWithFuse } from "@/components/useFuse";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Posts } from "@/type";

interface TypeResult {
  item: Posts;
  refIndex: number;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const allPosts: TypeResult[] = searchWithFuse(deferredQuery);

  return (
    <section className="py-32">
      <div className="container grid w-full max-w-lg items-center gap-4">
        <Label htmlFor="default-search">Search Your Articles</Label>
        <Input
          className="rounded-sm"
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          id="default-search"
          required={true}
          placeholder=" Type your keywork"
        />
      </div>
      {query && (
        <section className="mx-auto my-8 max-w-6xl py-10">
          <h2 className="px-4 py-2 text-xl font-bold capitalize transition">
            {" "}
            {query}
          </h2>
        </section>
      )}

      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2">
        {allPosts.map((post) => (
          <BlogCard key={post.item.id} item={post.item} />
        ))}
      </div>
    </section>
  );
}
