import React, {useState} from 'react';
import { images } from "./CarouselData";
import "./Carousel.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Carousel() {
    const [currImg, setCurrImg] = useState(0);

    return (
    <div className='carousel'>
        <div className='carouselInner'
            style={{backgroundImage:`url(${images[currImg].img})`}}>
                <div className='left' onClick={() => {
                    currImg >0 && setCurrImg(currImg - 1); }}>
                <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className='center'>
                    {/* <h2>{images[currImg].title}</h2>
                    <h3>{images[currImg].subtitle}</h3> */}
                </div>
                <div className='right' onClick={() => {
                    currImg <images.length - 1 && setCurrImg(currImg + 1);}}>
                <FontAwesomeIcon icon={faAngleRight} />
                </div>
        </div>
    </div>
  );
};

export default Carousel;
