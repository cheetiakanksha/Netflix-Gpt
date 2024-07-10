import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'
import { useSelector } from 'react-redux'
const MainComponent = () => {
  const movies= useSelector((store)=>store.movies?.addNowPlayingMovies);
  console.log(movies);
  if (movies== null) return ;
  const mainmovie= movies[0];
  console.log(mainmovie);
  const {original_title, overview,id}= mainmovie;
  return (
    <div className='bg-black pt-[30%] md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBg movieId={id}/>
    </div>
  )
}

export default MainComponent
