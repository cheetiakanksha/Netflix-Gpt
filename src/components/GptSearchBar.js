import React, { useState, useRef } from 'react';
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from 'react-redux';
import { initializeOpenAI } from "../utils/openai"; // Adjust the path as necessary
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const [apiKey, setApiKey] = useState('');
    const dispatch = useDispatch();

    const serachMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/" + movie + "?include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query " + searchText.current.value + " only give me values of 5 movies, comma separated like the example result given ahead example result: Gadar, Sholey, Don, RRR, Golmal";

        // Dynamically update openai instance with the new API key
        const dynamicOpenai = initializeOpenAI(apiKey);

        if (!dynamicOpenai) {
            alert("Failed to initialize OpenAI instance.");
            return;
        }

        // Make an API call to openai and get movie results
        const gptResults = await dynamicOpenai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        console.log(gptResults.choices[0]?.message?.content);
        if (gptResults.choices.length === 0) {
            <h3>We are sorry, could not find anything</h3>;
        }
        const gptMovies = gptResults.choices[0]?.message?.content.split(",");
        const data = gptMovies.map(movie => serachMovieTMDB(movie.trim()));
        const tmdbResults = await Promise.all(data);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, MovieResults: tmdbResults }));
    };

    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className='col-span-9 p-2 m-4'
                    type="text"
                    placeholder='Enter your ChatGPT OpenAI API key'
                />
                <button
                    className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'
                    onClick={() => {
                        if (!apiKey) {
                            alert('API key is required');
                            return;
                        }
                        // Perform any validation if needed
                    }}
                >
                    OK
                </button>
                <input
                    ref={searchText}
                    className='col-span-9 p-4 m-4'
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    onClick={handleGptSearchClick}
                    className='col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg'
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
}

export default GptSearchBar;
