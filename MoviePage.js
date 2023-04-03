import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import "./MoviePage.css";
// import Netflixnavbar from './Netflixnavbar';

export default function MoviePage() {
    const [state,setState]=useState([]);
    const API_KEY='6cdf1bc39c14d06f4b51e70d622928f4'
    const {id}=useParams()
    const value=id
    console.log(value);
    useEffect(()=>{
      if(value=="action")
      {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`).then (response=>{
        console.log("response====>",response.data.results);
        setState (response.data.results)
      })
    }
      else if(value=="horror")
      {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`).then (response=>{
        console.log("response====>",response.data.results);
        setState (response.data.results)
    })
  }
    else if(value=="crime")
    {
 axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`).then (response=>{
        console.log("response====>",response.data.results);
        setState (response.data.results)
    })
  }
    else if(value=="adventure")
    {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=12`).then (response=>{
        console.log("response====>",response.data.results);
        setState (response.data.results)
    })
  }
    else if(value=="history")
    {
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=36`).then (response=>{
        console.log("response====>",response.data.results);
        setState (response.data.results)
    })
  }
  else if(value=="mystery")
  {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=9648`).then (response=>{
      console.log("response====>",response.data.results);
      setState (response.data.results)
  })
}
else if(value=="comedy")
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else if(value=="thriller")
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=53`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else if(value=="original")
{
  axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else if(value=="drama")
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=18`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else if(value=="war")
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10752`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else if(value=="animation")
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else if(value=="fiction")
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
else
{
  axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10751`).then (response=>{
    console.log("response====>",response.data.results);
    setState (response.data.results)
})
}
 },[])

  return (
    <div>
      
       <div className='slide112'>
       {state.map((mov)=>(
<div className='scroll'>
  
    <div className='slidescroll12'>
        <img className='slideser' src={`https://image.tmdb.org/t/p/original${mov.backdrop_path}`}alt=''/>
        <div className='dsdrs7'>
        <p className='tittle45'><span className='color'>Title:</span>{mov?.title}</p>
      <p className='tittlee22'><span className='color'>Release Date:</span> {mov?.release_date}</p>
      <p className='tittlee35'><span className='color'>Popularity:</span> {mov?.popularity}</p>
      {/* <p className='tittlee2'>{mov?.original_language}</p> */}
      {/* <p className='tittlee2'>{mov?.original_title}</p> */}
      <p className='tittlee46'><span className='color'>Overview:</span>{mov?.overview}</p>
      </div>
  </div>
  
   </div>
    ))}
   </div>
    </div>

  
  )
}
