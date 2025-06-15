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
        <div className="flex flex-row items-center gap-x-3">
          <Disc size={24} />
          <Link
            href="/"
            className="self-center text-2xl font-semibold whitespace-nowrap"
          >
            Open Blog
          </Link>
        </div>
        <div className="flex flex-row flex-wrap items-center">
          <Button variant={"link"} className="rounded-full" asChild>
            <Link href={"/search"}>
              <Search />{" "}
            </Link>
          </Button>
          <Button variant="link" asChild>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/frontendweb/"}
            >
              <Linkedin />
            </Link>
          </Button>

          <Button variant="link" asChild>
            <Link target="_blank" href={"https://github.com/frontendweb3"}>
              {" "}
              <Github />{" "}
            </Link>
          </Button>

          <Button variant="link" asChild>
            <Link target="_blank" href={"https://x.com/FrontendWeb3"}>
              <Twitter />{" "}
            </Link>
          </Button>

          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
