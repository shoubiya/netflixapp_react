import logo from './logo.svg';
import './App.css';
import Netflixnavbar from './Netflixnavbar';
import Homepage from './Homepage';

// import { BrowserRouter } from 'react-router-dom';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Idserch from './Idserch';
import MoviePage from './MoviePage';
import Trending from './Trending';
import Popular from './Popular';
import Toprated from './Toprated';
import Latest from './Latest';
import UPcoming from './UPcoming';
import Nowplay from './Nowplay';
import Series from './Series';
import SeriesTop from './SeriesTop';
import SerOnTheAir from './SerOnTheAir';
import SerAiring from './SerAiring';

function App() {
  return (
    <div className="App">
        <Netflixnavbar/>
      
 
       <BrowserRouter>
    <Routes>
       <Route  path="/"  element={<Homepage/>}></Route>
       <Route  path="/Idserch/:id"  element={<Idserch/>}></Route>
       <Route  path="/MoviePage/:id"  element={<MoviePage/>}></Route>
       <Route  path="/Trending/:id"  element={<Trending/>}></Route>
       <Route  path="/Popular/:id"  element={<Popular/>}></Route>
       <Route  path="/Toprated/:id"  element={<Toprated/>}></Route>
       <Route  path="/Latest/:id"  element={<Latest/>}></Route>
       <Route  path="/UPcoming/:id"  element={<UPcoming/>}></Route>
       <Route  path="/Nowplay/:id"  element={<Nowplay/>}></Route>
       <Route  path="/Series/:id"  element={<Series/>}></Route>
       <Route  path="/SeriesTop/:id"  element={<SeriesTop/>}></Route>
       <Route  path="/SerOnTheAir/:id"  element={<SerOnTheAir/>}></Route>
       <Route  path="/SerAiring/:id"  element={<SerAiring/>}></Route>
       
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
