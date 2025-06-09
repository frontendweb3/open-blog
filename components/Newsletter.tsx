import { Label } from "@radix-ui/react-dropdown-menu"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react"

export function Newsletter() {
  return (
    <section className="bg-blue-100 my-28 py-8 px-4 mx-auto max-w-(--breakpoint-xl) lg:py-16 lg:px-6">
      <div className="mx-auto max-w-(--breakpoint-md) sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Join our free newsletter</h2>
        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-800"> Get notified about updates and be the first to get early access to the new, safer, and smarter way to archive your files.</p>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-(--breakpoint-sm) sm:flex sm:space-y-0">
            <div className="relative w-full">
              <Label className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</Label>
              <Input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-sm border border-border sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required={true} />
            </div>
            <div>
              <Button type="submit" className="h-9 py-3 px-5 w-full text-sm font-medium text-center rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg bg-black text-white hover:bg-gray-800 "> <SendHorizontal />  Subscribe</Button>
            </div>
          </div>
          <div className="mx-auto max-w-(--breakpoint-sm) text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-600">We care about your data, and we protect it seriously <Link href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</Link>.</div>
        </form>
      </div>
    </section>
  )
}
