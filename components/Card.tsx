import Image from "next/image"

function Card({ title }: { title: string }) {

  return (

    <div className="max-w-full bg-white dark:bg-gray-800">
      <a href="#">
        <Image className="rounded-lg p-3" width={1000} height={324} src="/moon.jpg" alt="moon" />
      </a>

      <div className="p-3">

        <div className="flex mb-3">
          <p className="text-sm text-gray-500 dark:text-gray-400"> Mar 10, 2023 </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mx-1"> , </p>
          <p className="text-sm text-gray-500 dark:text-gray-400"> 5 min read </p>
        </div>


        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>

      </div>

    </div >

  )

}

Card.defaultProps = {
  title: "Noteworthy technology acquisitions 2021"
}

export default Card
