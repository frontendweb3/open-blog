'use client' // Error boundaries must be Client Components
import { Button } from "@/components/ui/button"
import { House } from "lucide-react"
import Link from "next/link"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <section className="dark:bg-gray-900 my-16">
          <div className="py-8 px-4 mx-auto max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
            <div className="mx-auto max-w-(--breakpoint-sm) text-center">
              <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"> {error.name} </h1>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{error.message}</p>
              <Link href={"/"}>
                <Button variant="link"> <House /> Back to Homepage </Button>
              </Link>
            </div>
          </div>
        </section >
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
