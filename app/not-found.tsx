import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="my-16">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-(--breakpoint-sm) text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            {" "}
            404{" "}
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {" "}
            Something's wrong
          </p>
          <p className="mb-4 text-lg font-light">
            Sorry, we can't find that article. You'll find lots to explore on
            the home page.
          </p>
          <Link href={"/"}>
            <Button variant="link">
              {" "}
              <House /> Back to Homepage{" "}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
