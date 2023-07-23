import { Link } from "react-router-dom";
import  Waikiki from "../images/Waikiki.jpg";
import eat from "../images/oyester.jpg";
import DiamondH from "../images/DiamondH.jpg";

const Main = () => {

    return (

        <main>
          <section className="highlight p-2">
            <div className="hightlight">
              <div className="d-flex-wrap jc-space-between ai-center m-1">
                <h1>Sun, Sand, and Serenity</h1>
              
                <Link className="btn-a" to="/Sun"> Things to Do</Link>
                
              </div>
              <div className="grid-3 jc-space-between">
                <div className="dish-card">
                <img src= {Waikiki} alt="Brushetta" />
                  <div className="p-1">
                    <div className="d-flex jc-space-between mb-1">
                      <strong>Sand Surf Swim Sea</strong>
                      <strong className="secondary-orange-color">Water Sports</strong>
                    </div>
                    <p className="mb-1">Explore the Beauty of Hawaii's Beaches. Discover 
                    the allure of soft sands, magnificent waves, and crystal-clear waters that await you </p>
                  </div>
                </div>
                <div className="dish-card">
                  <img src= {eat} alt="Brushetta" />
                  <div className="p-1">
                    <div className="d-flex jc-space-between mb-1">
                      <strong>Fusion Cuisine</strong>
                      <strong className="secondary-orange-color">Culinary Delight</strong>
                    </div>
                    <p className="mb-1">We invite you to experience the vibrant flavors
                     of Hawaiian cuisine, the succulent sweetness of tropical fruits, 
                     and a world of culinary delights. Discover the art of preparing and
                      savoring traditional Hawaiian dishes such as poi, laulau, and lomi
                       lomi salmon, each reflecting the essence of the islands and its people. </p>
                    
                  </div>
                </div>
                <div className="dish-card">
                  <img src= {DiamondH} alt="Grilled Fish" />
                  <div className="p-1">
                    <div className="d-flex jc-space-between mb-1">
                      <strong>Hiking, Nature and Sightseeing</strong>
                      <strong className="secondary-orange-color">Landmarks</strong>
                    </div>
                    <p className="mb-1">Explore lush rainforests and stunning waterfalls. 
                    Hike along scenic trails or the Diamond Head summit trail. </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    );
  };

export default Main;