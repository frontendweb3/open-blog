import Link from "next/link"

function Signup() {
  return (
    <section className="bg-blue-100 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Join our free newsletter</h2>
        <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-800"> Get notified about updates and be the first to get early access to the new, safer, and smarter way to archive your files.</p>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full">
              <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required={true} />
            </div>
            <div>
              <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center rounded-lg border cursor-pointer sm:rounded-none sm:rounded-r-lg bg-black text-white hover:bg-gray-800 ">Subscribe</button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-600">We care about the protection of your data. <Link href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</Link>.</div>
        </form>
      </div>
    </section>
  )
}

export default Signup; 