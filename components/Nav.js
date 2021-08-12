import React from 'react';
import requests from '../utils/requests';
import { useRouter } from 'next/router'

function Nav() {

  const router = useRouter();

  return (
    <nav>
      <div className="flex justify-evenly whitespace-nowrap sm:px-20 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map((([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer p-4 transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 text-white font-light hover:font-bold hover:text-2xl"

          >{title}</h2>
        )))}
      </div>

      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] w-1/12"></div>
    </nav>

  )
}

export default Nav
