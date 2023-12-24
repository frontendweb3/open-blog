import Link from "next/link"

function Pagination() {

  return (

    <nav aria-label="pagination" className="mx-auto my-20 container">

      <ul className="mx-auto flex flex-wrap gap-x-5 gap-y-7 justify-center">
        <li className="block">
          <Link href="#" className="px-3 py-2 rounded-md leading-tight bg-white hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Prev</Link>
        </li>
        <li className="block">
          <Link href="#" className="px-3 py-2 leading-tight bg-blue-100 hover:bg-blue-200 border-transparent border rounded-lg text-black dark:bg-gray-800 dark:text-gray-400 mx-2 dark:hover:bg-gray-700 dark:hover:text-white">1</Link>
        </li>
        <li className="block">
          <Link href="#" className="px-3 py-2 leading-tight bg-blue-100  hover:bg-blue-200 border-transparent border rounded-lg text-black dark:bg-gray-800 dark:text-gray-400 mx-2 dark:hover:bg-gray-700 dark:hover:text-white">2</Link>
        </li>
        <li className="block">
          <Link href="#" className="px-3 py-2 leading-tight bg-blue-100  hover:bg-blue-200 border-transparent border rounded-lg text-black dark:bg-gray-800 dark:text-gray-400 mx-2 dark:hover:bg-gray-700 dark:hover:text-white">3</Link>
        </li>
        <li className="block">
          <Link href="#" className="px-3 py-2 leading-tight bg-blue-100  hover:bg-blue-200 border-transparent border rounded-lg text-black dark:bg-gray-800 dark:text-gray-400 mx-2 dark:hover:bg-gray-700 dark:hover:text-white">4</Link>
        </li>
        <li className="block">
          <Link href="#" className="px-3 py-2 rounded-md leading-tight bg-white hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
        </li>

      </ul>

    </nav>

  )

}
export default Pagination
