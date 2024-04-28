import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import ErrorElement from './pages/ErrorElement';

export default function App() {

  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<Movie />} errorElement={<ErrorElement />} />

      <Route path='*' element={<ErrorElement />} />

    </Routes>
  )
}
