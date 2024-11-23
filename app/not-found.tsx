import { Button } from "@/components/ui/button"
import { House } from "lucide-react"
import Link from "next/link"

export default function NotFound() {

  return (
    <section className="my-16">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl "> 404 </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl "> Something's wrong</p>
          <p className="mb-4 text-lg font-light ">
            Sorry, we can't find that article. You'll find lots to explore on the home page.
          </p>
          <Link href={"/"}>
            <Button variant="link"> <House /> Back to Homepage </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
