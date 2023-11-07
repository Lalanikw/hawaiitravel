import { Link } from 'react-router-dom';

const Plan = () => {
    return(
      <div className="plan-back">

        <div className="plan-top">
              <div className='plan-text'>
                  <h1>Excape to Hawaii, where paradise meets the adventure &#127802; </h1>
                  <h3>Picture yourself on sun-kissed beaches, the soft, golden sand between your toes, and the
                    soothing sound of waves in the background.
                    Explore lush rainforests, hike to breathtaking viewpoints, and discover vibrant marine life while snorkeling in crystal
                      clear waters.</h3>
                    <h3>Immerse yourself in the captavating hula performance and relish the island's unique cuisine. </h3>
                  <div>
                      <Link to="/Explore">
                        <button to="/src/pages/Explore.js" className='Plan-button'> Explore Hawaii &#10132; </button>
                      </Link>
                    </div>    
                </div>
            
        </div>

      </div>

      )
  };

export default Plan;