import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpCommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useUpcommingMovies = ()=>{
    const dispatch=useDispatch();
    const upCommingMovies=useSelector((store)=>store.movies.addUpCommingMovies)
    const getUpCommingMovies=async()=>{
    const data= await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",API_OPTIONS);
    const json =  await data.json();
    console.log(json);
    dispatch(addUpCommingMovies(json.results));
}
 useEffect(()=>{
   !upCommingMovies && getUpCommingMovies();},[]);
 };
 export default useUpcommingMovies;

