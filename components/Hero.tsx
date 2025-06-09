import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
export function Hero() {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div className="mx-auto flex max-w-(--breakpoint-lg) flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl">A Collection of stories related to Computer Science, Photography, and Health.</h1>
          <p className="text-balance text-muted-foreground lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et erat non dui semper tristique. Curabitur pharetra velit quis vulputate iaculis.</p>
        </div>
        <Button size="lg" className="mt-10">Explore All Posts <ArrowRight className="ml-2 size-4" /></Button>
      </div>
    </section>
  );
};
