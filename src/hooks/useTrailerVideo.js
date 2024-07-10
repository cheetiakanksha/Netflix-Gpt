
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
const useTrailerVideo = (movieId) => {
    const dispatch=useDispatch();
    const movieTrailer=useSelector((store)=>store.movies.addTrailerVideo)
    const getMovieVideos=async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+"movie_id/videos?language=en-US",API_OPTIONS);
        const json = await data.json();
        const filterData=json.results.filter((video)=>video.type==="Trailer");
        const trailer= filterData.length? filterData[0] :json.result[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));

    }
    useEffect (()=>{
        ! movieTrailer && getMovieVideos();
    },[])

}

export default useTrailerVideo
