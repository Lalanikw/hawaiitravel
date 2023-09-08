import React, {useState} from 'react';
import {images} from "./CarouselData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    return (
    <div className='carousel'>
        <div className='inner-carousel'
            style={{backgroundImage:`url(${images[currImg].img})`}}>
                <div className='carousel-left' onClick={() => {
                    currImg >0 && setCurrImg(currImg - 1);
                }}>
                <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className='carousel-center'>
                    <h1>{images[currImg].title}</h1>
                    <p>{images[currImg].subtitle}</p>
                </div>
                <div className='carousel-right' onClick={() => {
                    currImg <images.length - 1 && setCurrImg(currImg + 1);
                }}>
                <FontAwesomeIcon icon={faAngleRight} />
                </div>
        </div>
    </div>
  );
};

export default Carousel;
