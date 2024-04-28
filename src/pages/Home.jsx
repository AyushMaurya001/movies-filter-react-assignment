import React from 'react'
import { MoviesListCard, NavBar, NotFound } from '../components'
import { useRecoilState } from 'recoil'
import { moviesAtom } from '../recoil/atoms'

export default function Home() {

  const [movies, setMovies] = useRecoilState(moviesAtom);

  return (
    <div className='w-full min-h-screen bg-white relative'>
      
      <NavBar />

      <ul className=' w-full p-4 sm:py-4 sm:px-10 flex flex-wrap gap-2 sm:gap-5 justify-center items-center'>
        {
          movies.length===0 ?
          (<div>
            <NotFound content={`Nothing to be Found 🙅`} className={`w-full`} />
          </div>) :
          movies.map((movie, index) => <li key={index} className=' w-44'>
            <MoviesListCard movie={movie} />
          </li>)
        }
      </ul>
      
    </div>
  )
}
