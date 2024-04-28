import React, { useEffect, useState } from 'react'
import Button from './Button';
import { useSetRecoilState } from 'recoil';
import { moviesAtom } from '../recoil/atoms';
import { searchMovieByFilter } from '../lib/utils';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('movietitle');

  const setMovies = useSetRecoilState(moviesAtom);

  useEffect(() => {
    const searchedMovieByFilter = searchMovieByFilter(search, filter)
    .then((val) => setMovies(val))
    .catch((err) => console.log(err))
  }, [search, filter]);

  return (
    <div className='w-full h-full rounded-sm flex justify-center items-center'>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=' w-5'><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>

      <input type="text" className='h-[70%] w-[65%] focus:outline-none px-2' placeholder='Search movie' onChange={(e) => {
        setSearch(e.target.value);
      }} />
      
      <select id='filter' onChange={(e) => {
        setFilter(e.target.value);
      }} className='w-[25%] h-[70%] focus:outline-none font-medium'>
        <option value={`movietitle`}>Title</option>
        <option value={`moviegenres`}>Genre</option>
        <option value={`movielanguages`}>Language</option>
        <option value={`moviecountries`}>Country</option>
      </select>

    </div>
  )
}
