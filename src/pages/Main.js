import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

const Main = () => {
    return(
      < div className='main-section'>
        <div className='main-section-left'>
                  <Carousel/>
                  </div>
                <div className='main-section-right'>
                      <div className='main-section-text'>
                          <h1>Dreaming of a vacation in paradise?</h1>
                                <h2>Travel to Hawaii and immerse yourself in the beauty of its stunning beaches, lush landscapes, and vibrant culture.</h2>
                                <h2>Get ready for a tropical adventure like no other!</h2>
                        </div>
                        <div>
                            <Link to="/Explore">
                              <button to="/Explore" className='main-button'> Explore Hawaii &#10132; </button>
                            </Link>
                          </div>

                </div>

          </div>
      )
  };

export default Main;