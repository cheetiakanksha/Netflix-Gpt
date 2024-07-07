import React, { useEffect } from 'react'
import Header from './Header'
import MainComponent from './MainComponent';
import SecondComponent from './SecondComponent';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcommingMovies from '../hooks/useUpCommingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcommingMovies();
  useTopRatedMovies();
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
  return (
    <div>
      <Header/>{
        showGptSearch?(<GptSearch/>):
        (<><MainComponent/><SecondComponent/></>
        )
      }
     
      
    </div>
  )
}

export default Browse
