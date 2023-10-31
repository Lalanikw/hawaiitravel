import React from 'react';
import ChatBot from '../components/ChatBot';

const Hero = () => {
    return (
        <div className="hero-back">
                <div className="hero-text">
                    <h1>Hawaii</h1>
                    {/* <h2>A dream destination that promises an unforgettable travel experience</h2> */}
                    <ChatBot />
                 </div>
        </div>
    );
};

export default Hero;