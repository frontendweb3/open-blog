import Link from "next/link";
import {
  Github,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "@/components/icons";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-border px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-around gap-4 md:justify-between">
        <div className="flex flex-row flex-wrap">
          <Button variant="link" asChild>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/company/frontendweb/"}
            >
              <Linkedin />
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

          <Button variant="link" asChild>
            <Link target="_blank" href={"https://x.com/FrontendWeb3"}>
              <Twitter />{" "}
            </Link>
          </Button>
        </div>
        <Link
          href="https://github.com/frontendweb3"
          className="text-sm font-light whitespace-nowrap"
        >
          {" "}
          © Copyright by Frontend Web{" "}
        </Link>
      </div>
    </footer>
  );
}
