import React from 'react';
import ChatBot from '../components/ChatBot';

const Hero = () => {
    return (
        <div className="hero-back">
                <div className="hero-text">
                {/* <h1>Visit</h1>
                <h2>Hawaii</h2> */}
                    <ChatBot />
                 </div>
        </div>
    );
};

export default Hero;