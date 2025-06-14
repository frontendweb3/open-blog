"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Disc, Lock, Search } from "lucide-react";
import { ThemeSwitch } from "@/components/theme/theme-toggle";
import {
  Github,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "@/components/icons";

export function Header() {
  return (
    <header className="w-full border-b border-dashed px-2 py-3 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-around gap-4 md:justify-between">
        <Button variant="link" asChild>
          <Link href="/" className="flex items-center">
            <>
              <Disc size={6} />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Open Blog
              </span>
            </>
          </Link>
        </Button>
        <div className="flex flex-row flex-wrap items-center">
          <Button variant={"link"} className="rounded-full" asChild>
            <Link href={"/search"}>
              <Search />{" "}
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={"#"}>
              <Facebook />
            </Link>
          </Button>

          <Button variant="link" asChild>
            <Link href={"#"}>
              {" "}
              <Instagram />{" "}
            </Link>
          </Button>

          <Button variant="link" asChild>
            <Link href={"https://x.com/FrontendWeb3"}>
              <Twitter />{" "}
            </Link>
          </Button>

          <Button variant="link" asChild>
            <Link href={"https://www.linkedin.com/company/frontendweb"}>
              {" "}
              <Linkedin />{" "}
            </Link>
          </Button>

          <Button variant="link" asChild>
            <Link
              target="_blank"
              href={"https://github.com/frontendweb3/open-blog"}
            >
              {" "}
              <Github />{" "}
            </Link>
          </Button>
          <Button>
            {" "}
            <Lock /> Login{" "}
          </Button>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
