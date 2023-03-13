import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';

function Search() {

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="cursor-pointer outline-none"
          aria-label="Update dimensions"
        >
          <FaSearch />

        </button>
      </Popover.Trigger>
      <Popover.Portal>

        <Popover.Content
          className="rounded p-2 bg-white dark:bg-gray-800 w-[480px] shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >

          <div className='my-2 '>
            <label htmlFor="default-search" className="mb-2 mt-5 text-sm font-medium text-gray-900 sr-only dark:text-white">Search bar </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">Search</button>
            </div>
          </div>



          <div className='my-3'>

            <div className="text-white my-2 py-2 bg-blue-400 dark:bg-gray-900 dark:hover:bg-blue-400 border-none rounded-md dark:text-white">
              <Link href="/" className="relative inline-flex items-center rounded-lg w-full px-4 py-2 text-sm font-medium">
                What Is MdBook, And How To Install MdBook CLI?
              </Link>
            </div>
          </div>
        </Popover.Content >
      </Popover.Portal >
    </Popover.Root >
  )
}

export default Search;
