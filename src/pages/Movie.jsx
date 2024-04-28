import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetail } from '../lib/utils';
import { MovieDetailCard } from '../components';

export default function Movie() {
  const id = useParams();

  const [movieData, setMovieData] = useState({
    movietitle: "",
    imdbmovieid: "",
    movielanguages: [],
    moviecountries: [],
    moviemainphotos: [],
    moviegenres: [],
  });

  useEffect(() => {
    getMovieDetail(id.id)
    .then((val) => setMovieData(val))
    .catch((err) => console.log(err))
  }, [id]);
  
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      
      <ul className=' w-full py-2 flex flex-wrap gap-2 justify-center items-center'>
        
        <MovieDetailCard movie={movieData} />

      </ul>
      
    </div>
  )
}
