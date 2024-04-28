import React from 'react'
import SearchBar from './SearchBar'

export default function NavBar() {
  return (
    <div className=' w-full h-20 sticky z-10 bg-white drop-shadow-xl shadow-md flex p-2 justify-start items-center top-0'>
      
      <SearchBar />

    </div>
  )
}
