import React, { useEffect, useState } from 'react'
const AppContext = React.createContext();
const API = "https://api.tvmaze.com/shows";

const AppProvider = ({children})=>{
    const [isLoading, setIsLoading] = useState(true);
    const [isSingleLoading, setIsSingleLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [movieSingle, setMovieSingle] = useState([]);
    const[isError, setIsError] = useState({show:false,msg:"data not found"})

    const getMovies = async(url)=>{
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);   
            if(data){
                setIsLoading(false);
                setMovie(data);
            }else{
                setIsError({
                    show: true,
                    msg: data.error,
                })
            }
        }
        catch(error){
            console.log(error);
        }
    };
    
    const getSingleMovies = async(url)=>{
        try{
            const res = await fetch(url);
            const singleData = await res.json();
            console.log(singleData);   
            // console.log("Singleword");   
            if(singleData){
                setIsSingleLoading(false);
                setMovieSingle(singleData);
            }else{
                setIsError({
                    show: true,
                    msg: singleData.error,
                })
            }
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getMovies(API);
    },[]);
    return <AppContext.Provider value = {{isLoading, isError, movie, isSingleLoading, movieSingle, getSingleMovies}}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider};