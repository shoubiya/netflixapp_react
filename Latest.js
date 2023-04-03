import React, { useState,useEffect } from 'react';
import "./Latest.css";
import axios from "axios";
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Latest() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const[Latested,setLatest]=useState([])
    const[state,setState]=useState({
      single:[],
      video:""
    })
    const{id}=useParams()
    console.log(state);
   

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6cdf1bc39c14d06f4b51e70d622928f4`).then(response=>{
       console.log("response=>",response.data.results);
       setLatest(response.data.results)
      })
    },[])
    console.log(Latested);
 
    const singleview=(id)=>{
      console.log(id)
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6cdf1bc39c14d06f4b51e70d622928f4`).then(response=>{
        const single=response.data
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6cdf1bc39c14d06f4b51e70d622928f4`).then(response=>{
          console.log("response=>",response);
          const video=response.data
          setState({...state,
          single,
          video})
         })
      })
      console.log(state);
       }
    return (
      <div>
      <h1 className='head19'>Latest Movies</h1>
      <div className='slide1'>
      
        <div className='slide-items'>
          {Latested?.map((late)=>(
          <>
          <div className='slidescroll2'>
          <img className='slides'onClick={()=>{handleOpen();singleview(late?.id)}} src={`https://image.tmdb.org/t/p/original${late?.poster_path}`} alt=''></img>
          </div>
          </>
           ))}
        </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='row' style={{overflow:"scroll",height:"80vh"}}>

          <div className='slide112'>
       
<div className='scroll'>
  
    <div className='slidescroll12'>
    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${state.video==""?"":state?.video?.results[5]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='dsdrs7'>`
        <p className='tittle45'><span className='color'>Title:</span>{state?.single?.title}</p>
      <p className='tittlee22'><span className='color'>Release Date:</span> {state?.single?.release_date}</p>
      <p className='tittlee35'><span className='color'>Popularity:</span> {state?.single?.popularity}</p>
      {/* <p className='tittlee2'>{mov?.original_language}</p> */}
      {/* <p className='tittlee2'>{mov?.original_title}</p> */}
      <p className='tittlee46'><span className='color'>Overview:</span>{state?.single?.overview}</p>
      </div>
  </div>
  
   </div>
  
   </div>
   <div className='vedbut'>
      <button className='vedibutt'>Play Video</button>
    </div>
    </div>
          </Typography>
        </Box>
      </Modal>
        </div>
    )
  }
  