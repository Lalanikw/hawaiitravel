import { Link } from 'react-router-dom';
import fire from "./fire.jpg";

const Plan = () => {
    return(
      <div className="plan-back">

            <div className="plan-text-section">
                  <div className='plan-text'>
                        <h1>Let's plan your dream vacation</h1>
                        <h3>We will take you on a journey through the enchanting islands of Hawaii, exploring its unique attractions, must-visit locations, and insider tips to make the most of your trip. </h3>
                        <h3>Contact us for iterinaries, inquiries about local events and tips. </h3>
                        </div>
                    <div>
                      <Link to="/Login">
                        <button to="/ContactUs" className='main-button'> ContactUs &#10132; </button>
                      </Link>
                  </div>
                    
            </div>
            <div className='plan-image'>
                          <img src={fire} alt="fire-pole" />
            </div>
      </div>

      )
  };

export default Plan;