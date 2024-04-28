import React from 'react'

export default function NotFound({ content, className }) {
  return (
    <div className={` w-full min-h-96 flex flex-col justify-center items-center ${className}`}>
      <img
        src='/public/notFound.png'
        alt='not found'
        className=' w-full'
        draggable='false'
      />
      <h2 className=' text-4xl text-center font-medium'>
        {content}
      </h2>
    </div>
  )
}
