import { Link } from 'react-router-dom';
import temple from "./temple.jpg";
import sunsurf from "./sunsurf.JPG";
import seafood from "./sashimi.jpg";

const Plan = () => {
    return(
          <div className="plan-back">
            <h1>Let's plan your dream vacation</h1>
            <div className="plan-section ">
                <div className="plan-text">
                    <h3>We will take you on a journey through the enchanting islands of Hawaii, exploring its unique attractions, must-visit locations, and insider tips to make the most of your trip. </h3>
                    <h3>Contact us for iterinaries, inquiries about local events and tips</h3>
                    <p></p><div>
                      <Link to="/Login">
                        <button to="/ContactUs" className='main-button'> ContactUs &#10132; </button>
                      </Link>
                    </div>
                </div>
                <div className="plan-img">
                    <div className='plan-img1'>
                      <img src={temple} alt="Plumeria-flowers" />
                    </div>
                    <div className='plan-img2'>
                      <img src={sunsurf} alt="sunset-surf-waikiki-beach"  />
                    </div>
                    <div className='plan-img3'>
                    <img src={seafood} alt="sashimi-Japanese-seafood"  />
                    </div>
                </div>
            </div>

          </div>
      )
  };

export default Plan;