import React from 'react'

export default function GenreLabel({ genre }) {
  return (
    <div className={`px-1 rounded-md inline bg-yellow-400/40 text-black/75 font-medium`}>
      {genre}
    </div>
  )
}
