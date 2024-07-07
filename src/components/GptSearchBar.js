import React, { useRef } from 'react'
import lang from "../utils/languageConstants"
import { useSelector } from 'react-redux'
import openai from "../utils/openai";
const GptSearchBar = () => {
    const langKey= useSelector((store)=>store.config.lang)
    const searchText=useRef(null);
    const handleGptSearchClick=async()=>{
      console.log(searchText.current.value);
      // make an api call to openai and get movie results
        const gptResults = await openai.chat.completions.create({
          messages: [{ role: 'user', content: searchText.current.value }],
          model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices)
      }
      
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
        <input ref ={searchText}className='col-span-9  p-4 m-4'type="text" placeholder={lang[langKey].gptSearchPlaceholder}></input>
        <button onClick={handleGptSearchClick()}className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'>{lang[langKey].search} </button>
      </form>
    </div>
  )
}

export default GptSearchBar
