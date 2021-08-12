
import React from 'react'
import Image from 'next/image'
import { forwardRef } from 'react';

const Thumbnail = forwardRef(({ result }, ref) => {

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      key={result.id}
      className="p-4 group cursor-pointer transition duration-00 ease-in transform sm:hover:scale-105 hover:z-50 text-white">
      <h2>{result.backrop_path}</h2>
      <Image
        className="rounded-lg"
        layout="responsive"
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920} />

      <div className="p-4">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl transition duration-100 ease-in-out hover:font-bold">{result.original_name || result.title}</h2>

        <p className="flex items-center">{result.media_type && `${result.media_type} °`}{" "} {result.release_date || result.first_air_date} ° {" "}</p>

      </div>

    </div>
  )
})

export default Thumbnail
