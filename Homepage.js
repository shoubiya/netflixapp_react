import React from 'react';
import "./Homepge.css";
import Latest from './Latest';
import Nowplay from './Nowplay';
import Popular from './Popular';
import SerAiring from './SerAiring';
import Series from './Series';
import SeriesTop from './SeriesTop';
import SerOnTheAir from './SerOnTheAir';
import Toprated from './Toprated';
import Trending from './Trending';
import UPcoming from './UPcoming';
// import Netflixnavbar from './Netflixnavbar';
export default function Homepage() {
  return (
    // <div>
    //   <div className='netflix'>
    //      <Netflixnavbar/>
    //   <img src="https://www.wallpapertip.com/wmimgs/3-30850_avengers-wallpaper-4k-for-pc.jpg" class="img-fluidj" alt="..."></img>
    //   <div class="cond">
    //         {/* <h1 className='donh1'><b>The Best Way To Find<br/>Yourself Is To Lose Yourself<br/>In The Service Of Others!!!</b></h1> */}
              
    //         {/* <button class="donatee" >🤍Make A Donation</button> */}
            
               
    //     </div>
    //     </div>
    // </div>
    <div className='dis'>
    <div>
    <div className="netflix">
     
        <div className="kjl">
            <div className="nmk">
      
            </div>
        </div>
     
    </div>
    <Trending/>
    <Popular/>
    <Toprated/>
    <Latest/>
    <UPcoming/>
    <Nowplay/>
    <Series/>
    <SeriesTop/>
    <SerOnTheAir/>
    <SerAiring/>
    </div>
    </div>
  )
}
