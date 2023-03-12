import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSearch, FaSun, FaRegMoon } from "react-icons/fa";
import { useTheme } from 'next-themes'
import Link from "next/link";
function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full">

      <div className="container flex flex-wrap items-center justify-between mx-auto">

        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">OpenBlog</span>
        </Link>

        <div className="flex md:order-2">

          <ul className="flex flex-wrap p-4 md:space-x-8 md:mt-0 md:text-sm md:font-medium">

            <li>

              <Link href={"#"}  className="block py-2 pl-3 pr-4 text-gray-700 hover:text-blue-700 dark:hover:text-blue-700 rounded md:p-0 dark:text-white" aria-current="page">
                <FaSearch />
              </Link>

            </li>

            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white" aria-current="page">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link href="#" 
              className="block py-2 pl-3 pr-4 text-gray-700 rounded  hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"> <FaFacebook />
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white">
                <FaLinkedin />
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white">
                <FaInstagram />
              </Link>
            </li>
            <li >
              <button className="block py-2 pl-3 pr-4 rounded md:p-0" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <FaSun /> : <FaRegMoon />}
              </button>
            </li>
          </ul>
        </div>

      </div>

    </header>
  )

}
export default Header
