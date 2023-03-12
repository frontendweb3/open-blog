import Card from "@/components/Card";
function ReadMore() {
  return (
    <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="px-4 mx-auto max-w-screen-xl">

        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          More articles from OpenBlog
        </h2>


        <div className="container mx-auto grid gap-12 sm:grid-cols-1 lg:grid-cols-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </aside>

  )
}

export default ReadMore
