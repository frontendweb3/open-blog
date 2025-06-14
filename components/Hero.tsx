import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function Hero() {
  return (
    <section className="border-b py-36 shadow-2xs">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mx-auto flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">
            A Collection of stories related to Computer Science, Photography,
            and Health.
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            et erat non dui semper tristique. Curabitur pharetra velit quis
            vulputate iaculis.
          </p>
        </div>
        <Button size="lg" variant={"outline"} className="mt-10" asChild>
          <Link href={"#"}>
            Explore All Posts <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
