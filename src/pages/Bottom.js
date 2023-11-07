import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Bottom = () => {
    return(
        <div className='plan-bottom'>
           
              <div className='plan-bottom-pics'>
                <Carousel />
              </div>
              <div className='plan-bottom-text'>
                  <h1>Hawaii welcomes you with open arms &#127802; </h1>
                  <h3>We will take you on a journey through the enchanting islands of Hawaii, exploring its unique attractions,
                            must-visit locations, and insider tips to make the most of your trip. </h3>
                  <h3>Contact us for iterinaries, inquiries about local events and tips. </h3>
                <div>
                        <Link to="/Login">
                          <button to="/src/pages/Login.js" className='Plan-button'> Contact Us &#10132; </button>
                        </Link>
            </div>
            
                 </div>
                            
        </div>

      )
  };

export default Bottom;