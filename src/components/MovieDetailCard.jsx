import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GenreLabel from './GenreLabel';

export default function MovieDetailCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className=' w-[90%] shadow-xl drop-shadow-2xl flex flex-col md:flex-row gap-4 md:px-7 md:gap-4 border p-4 md:p-10 md:justify-start md:items-start justify-center items-center'>
      
      <div className='flex flex-col gap-4 h-full'>

        <h2 className=' w-80 h-full text-4xl py-1 font-bold border-b-2 border-b-black '>
          {movie.movietitle}
        </h2>

        <img
          src={movie.moviemainphotos[0]}
          alt={`${movie.movietitle} movie poster`}
          className=' w-80  shadow-xl drop-shadow-2xl'
          draggable='false'
        />

      </div>

      <div className='flex flex-col w-full gap-4 p-4 justify-center items-center md:justify-start md:items-start'>

        <div className='flex gap-3 justify-start w-80'>
          <h5 className=' font-medium'>
            IMDb movie id: 
          </h5>
          <Link target='_blank' className='bg-base5 text-black/80 font-medium px-1 rounded-md hover:underline' to={`https://www.imdb.com/title/${movie.imdbmovieid}`}>
            {movie.imdbmovieid}
          </Link>
        </div>

        <div className=' flex gap-1 justify-start w-80'>
          <h3 className=' text-xl font-semibold'>
            Genre:
          </h3>
          <ul className='p-1 flex gap-2 flex-wrap'>
            {movie.moviegenres.map((genre) => (
              <GenreLabel genre={genre} />
            ))}
          </ul>
        </div>
        
        <div className=' flex gap-1 justify-start w-80'>
          <h3 className=' text-xl font-semibold'>
            Country:
          </h3>
          <ul className='p-1 flex gap-2 flex-wrap'>
            {movie.moviecountries.map((country) => (
              <GenreLabel genre={country} />
            ))}
          </ul>
        </div>

        <div className=' flex gap-1 justify-start w-80'>
          <h3 className=' text-xl font-semibold'>
            Languages:
          </h3>
          <ul className='p-1 flex gap-2 flex-wrap'>
            {movie.movielanguages.map((language) => (
              <GenreLabel genre={language} />
            ))}
          </ul>
        </div>

      </div>


    </div>
  )
}
