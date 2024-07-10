import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const suggestedMovies=useSelector((store)=>store.gpt);
  const {movieResults,movieNames}=suggestedMovies;
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-opacity-90 text-white'>
      <div>
        
        {movieNames.map((movieName,index)=>(<MovieList key={movieName}title={movieNames} movies={movieResults[index]}/>))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions
