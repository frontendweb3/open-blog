"use client"

import React, { useState } from 'react';
import { Card } from '@/components/Card';
import { searchWithFuse } from "@/components/useFuse";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Posts } from '@/type';

interface TypeResult {
  item: Posts;
  refIndex: number;
}

export default function Search() {

  const [query, setQuery] = useState("");

  const allPosts: TypeResult[] = searchWithFuse(query)

  return (
    <section className="py-32">
      <div className="container grid w-full max-w-lg items-center gap-4">
        <Label htmlFor="default-search">Search Your Articles</Label>
        <Input className="rounded-sm" onChange={(event) => setQuery(event.target.value)} type="text" id="default-search" required={true} placeholder=" Type your keywork" />
      </div>
      {query && <div className="container items-center gap-4 mt-16 capitalize"> <h1> Result {query} </h1> </div>}
      <div className="container mt-24 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {allPosts.map((post) => <Card key={post.item.id} item={post.item} />)}
      </div>
    </section >
  )
}
