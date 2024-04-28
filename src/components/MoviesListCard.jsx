import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import GenreLabel from './GenreLabel';

export default function MoviesListCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className=' w-44 min-h-72 flex flex-col gap-2 drop-shadow-xl shadow-md bg-white'>

      <Link to={`/movie/${movie.movietitle}`}>
        <img
          src={movie.moviemainphotos[0]}
          alt={movie.movietitle+` movie's poster`}
          className=' w-full min-h-64 text-center'
          />
      </Link>
      <h3 className=' text-lg w-full px-3 flex justify-start items-start text-left text-black font-medium h-9 overflow-hidden'>
        <Link to={`/movie/${movie.movietitle}`} className=' hover:underline'>
          {
            movie.movietitle.length > 18 ?
            movie.movietitle.substring(0, 15)+"..." : 
            movie.movietitle
          }
        </Link>
      </h3>
      
      <div className=' flex px-2 justify-start gap-2 items-center'>
        {
          movie.moviegenres.length<2 ?
          movie.moviegenres.map((genre, index) => 
          <GenreLabel genre={genre} key={index} />) : <>
            <GenreLabel genre={movie.moviegenres[0]} />
            <GenreLabel genre={movie.moviegenres[1]} />
          </>
        }
      </div>

      <Button content={`Know more`} className={` w-full`} onClick={() => {
        navigate(`/movie/${movie.movietitle}`);
      }} />
      

    </div>
  )
}
