import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        addNowPlayingMovies:null,
        addTrailerVideo:null,
        addPopularMovies:null,
        addUpCommingMovies:null,
        addTopRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.addNowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.addPopularMovies=action.payload;
        },
        addUpCommingMovies:(state,action)=>{
            state.addUpCommingMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.addTopRatedMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.addTrailerVideo=action.payload;
        }


    }
});
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpCommingMovies,addTopRatedMovies} = moviesSlice.actions;
export default moviesSlice.reducer