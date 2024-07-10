import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { bgImg } from '../utils/constants'

const GptSearch = () => {
  return (
        <>
        <div className='fixed -z-20 '>
            <img className="h-screen object-cover"alt='logo' src={bgImg}></img>
       
        </div>
        <div className=''>
        <GptSearchBar/>
        <GptMovieSuggestions/>
        </div>
        </>
  )
}

export default GptSearch
