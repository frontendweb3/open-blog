"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Disc, Lock, Search } from "lucide-react"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Github, Facebook, Instagram, Twitter, Linkedin } from "@/components/icons"


export function Header() {
  return (
    <header className="px-2 py-3 sm:px-4 w-full z-20 border-b border-gray-200">
      <div className="container flex gap-4 flex-wrap items-center justify-around md:justify-between mx-auto">
        <Link href="/" className="flex items-center">
          <Button variant="link"> <Disc /> <span className="self-center text-2xl font-semibold whitespace-nowrap">Open Blog</span> </Button>
        </Link>
        <div className="flex flex-row flex-wrap">
          <Link href={"/search"}>
            <Button variant="link"> <Search /> </Button>
          </Link>
          <Link href={"#"}>
            <Button variant="link"> <Facebook /> </Button>
          </Link>
          <Link href={"#"}>
            <Button variant="link"> <Instagram /> </Button>
          </Link>
          <Link href={"https://x.com/FrontendWeb3"}>
            <Button variant="link"> <Twitter /> </Button>
          </Link>
          <Link href={"https://www.linkedin.com/company/frontendweb"}>
            <Button variant="link"> <Linkedin /> </Button>
          </Link>
          <Link target="_blank" href={"https://github.com/frontendweb3/open-blog"}>
            <Button variant="link"> <Github /> </Button>
          </Link>
          <Button variant="link"> <Lock /> Login </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
