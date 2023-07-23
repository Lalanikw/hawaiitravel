import { Link } from "react-router-dom";
import Map from "./Map";
// import ChatWidget from "../pages/ChatWidget";


const Hero = () => {
    return (
        <header>
          <div className="container py-2">
              <div className="grid-2 px-1 pe-1 ms-1 me-1">
                    <div>
                          <h1 className="hero-logo ms-1 pt-4">Escape to Paradise </h1>
                          {/* <div className="Flower">&#x1F33A;</div> */}
                          <p className="highlight-light-color p-1">Discover the magic of Hawaii with US!, 
                          your ultimate resource for planning an extraordinary Hawaiian getaway. Whether 
                          you're seeking pristine beaches, breathtaking landscapes, vibrant culture, or 
                          thrilling outdoor adventures, we are here to turn your dreams into reality.</p>
                          <div className="my-2">
                            <Link className="btn-a" to="/sun"> Explore Hawaii</Link>
                          </div>
                    </div>  
                    <div className="map"><Map/></div>
                      
              </div>
          </div>
        </header>
    );
  };

export default Hero;