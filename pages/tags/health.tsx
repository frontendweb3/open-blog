import Card from "@/components/Card";
import { posts } from "@/data/posts"

function Tags() {

  return (
    <aside aria-label="HealthRelated articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">

      <div className="px-4 mx-auto max-w-screen-xl">

        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          More articles from Health
        </h2>

        <div className="container my-12 mx-auto grid grid-cols-1 gap-12 md:gap-12 lg:gap-12  lg:grid-cols-3  md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">

          {
            posts.map(item => item.tags[0] === 'Health' ? <Card item={item} /> : " ")
          }

        </div>

      </div>

    </aside>
  )
}


export default Tags
