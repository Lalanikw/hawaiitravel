import React from 'react';
import './Video.css'; // Create this file for styling
import videoSource from './Waikiki_beach.mp4';

function Video() {

  return (
      <div className='video'>
         <video autoPlay loop muted>
              <source src={videoSource} type='video/mp4'/>
          </video>
      
    </div>
  )
}
export default Video;
