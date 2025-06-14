"use client";

import React, { useState } from "react";
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

  const allPosts: TypeResult[] = searchWithFuse(query);

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
        <div className="container mt-16 items-start gap-4 capitalize">
          <h2 className="font-manrope text-5xl font-bold"> {query} </h2>
        </div>
      )}

      <div className="container grid grid-cols-1 p-5">
        {allPosts.map((post) => (
          <BlogCard key={post.item.id} item={post.item} />
        ))}
      </div>
    </section>
  );
}
