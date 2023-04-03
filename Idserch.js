import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Homepage from './Homepage';
import Netflixnavbar from './Netflixnavbar';


export default function Idserch() {
    const[state,setState]=useState([])
    const {id}=useParams()
    console.log(state);
   
   
    useEffect(()=>{
      axios.get(`https://www.omdbapi.com/?i=${id}&apikey=d46f7272`).then(response=>{
       console.log("response=>",response.data);
       setState(response.data)
      })
    },[])


  return (
    <div>

      <Homepage/>
    </div>
  )
}
