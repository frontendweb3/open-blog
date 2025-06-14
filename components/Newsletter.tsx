import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";

export function Newsletter() {
  return (
    <section className="mx-auto my-28 max-w-(--breakpoint-xl) bg-blue-100 px-4 py-8 lg:px-6 lg:py-16">
      <div className="mx-auto max-w-(--breakpoint-md) sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Join our free newsletter
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl md:mb-12 dark:text-gray-800">
          {" "}
          Get notified about updates and be the first to get early access to the
          new, safer, and smarter way to archive your files.
        </p>
        <form action="#">
          <div className="mx-auto mb-3 max-w-(--breakpoint-sm) items-center space-y-4 sm:flex sm:space-y-0">
            <div className="relative w-full">
              <Label className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300">
                Email address
              </Label>
              <Input
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-sm border border-border bg-white p-3 pl-10 text-sm text-gray-900 sm:rounded-none sm:rounded-l-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Enter your email"
                type="email"
                id="email"
                required={true}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="h-9 w-full cursor-pointer rounded-lg border bg-black px-5 py-3 text-center text-sm font-medium text-white hover:bg-gray-800 sm:rounded-none sm:rounded-r-lg"
              >
                {" "}
                <SendHorizontal /> Subscribe
              </Button>
            </div>
          </div>
          <div className="newsletter-form-footer mx-auto max-w-(--breakpoint-sm) text-left text-sm text-gray-500 dark:text-gray-600">
            We care about your data, and we protect it seriously{" "}
            <Link
              href="#"
              className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
            >
              Read our Privacy Policy
            </Link>
            .
          </div>
        </form>
      </div>
    </section>
  );
}
