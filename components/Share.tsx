"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { IconBack } from "./icons/back";
import { Link2 } from "lucide-react";
import { Linkedin, Twitter } from "./icons";
import { getDomain } from "@/lib/getDomain";
import { toast } from "sonner";

export function Share({ title, slug }: { title: string; slug: string }) {
  const getURL = getDomain(slug);
  function getCopy() {
    if (getURL) {
      navigator.clipboard
        .writeText(getURL)
        .then(() => {
          toast.success("Your URL is copied to the clipboard.", {
            closeButton: true,
          });
        })
        .catch((err) => {
          toast.error("The URL is not copied, and something has gone wrong.", {
            closeButton: true,
          });
        });
    }
  }
  return (
    <div className="my-10 flex gap-4 md:col-span-1 lg:flex-col">
      <Button className="w-16" size={"icon"} variant={"link"} asChild>
        <Link href={"/"}>
          <IconBack />
          Blog
        </Link>
      </Button>
      <Button
        className="w-16"
        title="Copy Link"
        variant="ghost"
        size="icon"
        onClick={getCopy}
      >
        <Link2 />
      </Button>
      <Button
        className="w-16"
        title="Share on Twiiter"
        variant="ghost"
        size="icon"
        asChild
      >
        <Link
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${title}&url=${getURL}`}
        >
          <Twitter />
        </Link>
      </Button>
      <Button
        className="w-16"
        title="Share on Linkedin"
        variant="ghost"
        size="icon"
        asChild
      >
        <Link
          target="_blank"
          href={`https://www.linkedin.com/feed/?shareActive=true&shareUrl=${getURL}`}
        >
          <Linkedin />
        </Link>
      </Button>
    </div>
  );
}
