import React, { useState } from 'react';
import "./Netflixnavbar.css";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate, Navigate} from 'react-router-dom';

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
export default function Netflixnavbar() {
  
  
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  // const Navigate=useNavigate();
  const[state,setState]=useState([])
  console.log(state);

  
  
  const SearchMovie=(e)=>{
    axios.get(`https://www.omdbapi.com/?s=${e.target.value}&apikey=d46f7272`).then(response=>{
     console.log("response=>",response.data.Search);
     setState(response.data.Search)
    })
  }
  const IdSearch=(id)=>{
console.log(id);
Navigate(`/Idserch/${id}`);
  }
  
  
  const SingleMovie =(id)=>{
    Navigate(`/MoviePage/${id}`)
    console.log(id);
  }
 
   
  return (
    <div className='fades'>
         <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix logo'></img>
         <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar'></img>
        <div>
          <div>
        <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
        <title>Smooth Expanding Search Bar</title>
        <div className="search-box">
          <input className="search-text" type="text" placeholder="Search Anything" onChange={SearchMovie} />
          <a href="#" className="search-btn" onClick={handleOpen}>
            <i className="fas fa-search" />
          </a>
          </div>
          
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
    GENRE
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item"  href="/MoviePage/action">Action</a>
    <a class="dropdown-item"  href="/MoviePage/horror">Horror</a>
    <a class="dropdown-item"  href="/MoviePage/crime">Crime</a>
    <a class="dropdown-item"  href="/MoviePage/adventure">Adventure</a>
    <a class="dropdown-item"  href="/MoviePage/history">History</a>
    <a class="dropdown-item"  href="/MoviePage/mystery">Mystery</a>
    <a class="dropdown-item"  href="/MoviePage/comedy">Comedy</a>
    <a class="dropdown-item"  href="/MoviePage/thriller">Thriller</a>
    <a class="dropdown-item"  href="/MoviePage/original">Original</a>
    <a class="dropdown-item"  href="/MoviePage/drama">Drama</a>
    <a class="dropdown-item"  href="/MoviePage/war">War</a>
    <a class="dropdown-item"  href="/MoviePage/animation">Animation</a>
    <a class="dropdown-item"  href="/MoviePage/fiction">Fiction</a>
    <a class="dropdown-item"  href="/MoviePage/family">Family</a>
    <div class="dropdown-divider"></div>
    {/* <a class="dropdown-item" href="#">Separated link</a> */}
  </div>
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

         {state?
        state.map((movie)=>(
          <div class="card" style={{width: "18rem"}}>
  <img src={movie?.Poster} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{movie?.Title}</h5>
    <p class="card-text">{movie?.Type}</p>
    <p class="card-text">{movie?.Year}</p>
    <a href={`/Idserch/${movie.imdbID}`} class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
  ))
:
""
}
    </div>
          </Typography>
        </Box>
      </Modal>
      
      </div>
      </div>
       )
}

