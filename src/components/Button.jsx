import React from 'react'

export default function Button({ onClick, className, content }) {
  return (
    <button onClick={onClick} className={`p-2 bg-base5 text-black/80 font-medium ${className}`}>
      {content}
    </button>
  )
}
