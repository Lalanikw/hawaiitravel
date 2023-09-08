import { Link } from 'react-router-dom';
import temple from "./temple.jpg";
import sunsurf from "./sunsurf.JPG";
import seafood from "./sashimi.jpg";

const Plan = () => {
    return(
          <div className="plan-back">
            <h1>Let's work together and plan your dream vacation</h1>
            <div className="plan-section ">
                <div className="plan-text">
                    <p>We will take you on a journey through the enchanting islands of Hawaii, exploring its unique attractions, must-visit locations, and insider tips to make the most of your trip. </p>
                    <p>Contact us for iterinaries, inquiries about local events and tips</p>
                    <p></p><div>
                      <Link to="/Login">
                        <button to="/ContactUs" className='main-button'> ContactUs &#10132; </button>
                      </Link>
                    </div>
                </div>
                <div className="plan-img">
                    <div className='plan-img1'>
                      <img src={temple} alt="flowers" />
                    </div>
                    <div className='plan-img2'>
                      <img src={sunsurf} alt="sunsurf"  />
                    </div>
                    <div className='plan-img3'>
                    <img src={seafood} alt="seafood"  />
                    </div>
                </div>
            </div>

          </div>
      )
  };

export default Plan;