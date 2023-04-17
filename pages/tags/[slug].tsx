import Card from "@/components/Card";
import { posts } from "@/data/posts"
import { type Posts } from "@/type";
import { useRouter } from 'next/router';

export async function getStaticProps(context: { params: { slug: string } }) {

  const { slug } = context.params

  const tagPosts: Posts[] = []

  for (const item of posts) {
    item.tags.map(tag => {
      if (tag.toLowerCase().trim().split(" ").join("-") === slug) {
        tagPosts.push(item)
      }
    })
  }

  return {
    props: {
      tagPosts: JSON.stringify(tagPosts)
    }
  }
}


export async function getStaticPaths() {
  const paths: { params: { slug: string } }[] = []

  for (const item of posts) {
    item.tags.map(tag => {
      paths.push(({ params: { slug: tag.toLowerCase().trim().split(" ").join("-") } }))
    })
  }

  return {
    paths: paths,
    fallback: false,
  }

}


function Tags({ tagPosts }: { tagPosts: string }) {

  const router = useRouter()
  const tagName = router.query.slug as string

  return (
    <aside aria-label="Health related articles" className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800">

      <div className="px-4 mx-auto max-w-screen-xl">

        <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
          More articles from {tagName.replaceAll("-", " ")}
        </h2>

        <div className="container my-12 mx-auto grid grid-cols-1 gap-12 md:gap-12 lg:gap-12 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 ">

          {
            JSON.parse(tagPosts).map((item: Posts) => <Card key={item.id} item={item} />)
          }

        </div>

      </div>

    </aside>
  )
}


export default Tags
