import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondComponent = () => {
    const movies=useSelector((store)=>store.movies)
  return (
    movies.addNowPlayingMovies&&(
    <div className=' mt-0 md:-mt-52 pl-4  md:pl-12 relative z-20 bg-black'>
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
      <MovieList title={"Upcoming"} movies={movies.addUpCommingMovies}/>
   


    </div>)
  )
}

export default SecondComponent
