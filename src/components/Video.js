import React from 'react';
import './Video.css'; // Create this file for styling
import videoSource from './Waikiki_beach.mp4';

function Video() {

  return (
      <div className='video'>
         <video src={videoSource} autoPlay loop muted /> 
    </div>
  )
}
export default Video;
