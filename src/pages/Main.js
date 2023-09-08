import fire from './images/fire.jpg';
import { Link } from 'react-router-dom';

const Main = () => {
    return(
          < div className='main-section'>
                <div className='main-section-left'>
                    <img src={fire} alt="fire"/>
                </div>
                <h1>Dreaming of a vacation in paradise?</h1>
                <div className='main-section-right'>
                    
                    <p>Travel to Hawaii and immerse yourself in the beauty of its stunning beaches, lush landscapes, and vibrant culture.</p>
                    <p>Get ready for a tropical adventure like no other!</p>
                    <p></p>
                    <div>
                      <Link to="/Explore">
                        <button to="/Explore" className='main-button'> More Details &#10132; </button>
                      </Link>
                    </div>
                </div>
          </div>
      )
  };

export default Main;