import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";


function Footer() {

  return (

    <footer className="px-2 sm:px-4 py-2.5 w-full">

      <div className="container flex flex-wrap items-center justify-between mx-auto">

        <Link href="https://github.com/frontendweb3" className="mx-auto text-gray-400 text-sm font-semibold whitespace-nowrap dark:text-white">2023 copyright frontend web
        </Link>

        <ul className="mx-auto flex p-4 flex-row md:space-x-8 md:mt-0 md:text-sm font-medium">
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">
              <FaGithub />
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white ">
              <FaLinkedin />
            </Link>
          </li>

        </ul>
      </div>

    </footer>

  )
}

export default Footer
