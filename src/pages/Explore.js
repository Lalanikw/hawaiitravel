import React from 'react';
import koko from "./images/Kokocrater.jpg";
import coral from "./images/coral.jpg";
import underwater from "./images/water.jpg";
import event1 from "./images/event1.jpg";
import oy1 from "./images/oy1.jpg";
import temple from "./images/temple.jpg";
import bottom from "./images/bottom.JPG";

const Explore = () => {

    return (
      <div className='Explore-section-text'>
         <h1>Paradise Unveiled</h1>
         <h2>Exploring Hawaii is an odyssey that goes beyond the surface, inviting travelers to connect with nature, immerse themselves in culture, and embrace the Aloha spirit. Whether you're hiking to hidden waterfalls, savoring local delicacies, or simply soaking in the beauty of a sunset, Hawaii's allure is an invitation to experience paradise on Earth—a realm where dreams become reality and memories are etched forever.
            </h2>
        <div className='Explore-section'>
            <div className='item1'>
                  <img src={coral} alt='"corals-waikiki-beach'/>
                  <div className='item1-text'>
                  <h2>Riding the Waves</h2>
                  <p>Boogie boarding, invites you to ride the ocean's waves with unmatched excitement. Queen's Beach boasts gentle yet playful waves that make it an ideal destination for boogie boarding beginners and experts alike.</p>
                  </div>
            </div>
            <div className='Explore-Item3'>
               <img src={event1} alt='hula-dancing-event'/>
               <h2>Dancing</h2>
               <p>Hula, a mesmerizing form of storytelling that reflects the island's history, legands and connection to the land. As performers sway gracefully to the rhythm of the music, they share narratives of ancient Hawaii, celebrating the land, sea, and deities.  </p>
               <p></p>
               <p></p>
            </div>
            <div className='Explore-Item4'>
               <img src={oy1} alt='oysters-seafood'/>
               <div className='item4-text'>
               <h2>From Ocean to Plate</h2>
               <p>In Hawaii, enjoying oysters is more than just a meal—it's a cultural experience that connects you to the ocean and the land.</p>
            </div>
            </div>
            <div className='Explore-Item2'>
            <img src={underwater} alt='"underwater-corals-fish'/>
               <h2>Underwater exploration</h2>
               <p>As you immerse yourself in the ocean's embrace, you become part of a vibrant ecosystem that hums with life and energy. Whether you're discovering the vivid tapestry of coral reefs or gazing into the abyss's mysteries, each moment beneath the surface unveils a universe that enriches your understanding of our planet's intricate interconnectedness.</p>
            
            </div>
            <div className='Explore-Item5'> 
               <img src ={temple} alt='temple-buddhist-Byodo-In'/>
               <h2>Byodo-In Temple</h2>
               <p>Byodo-In Temple is a replica of a 950-year-old temple in Uji, Japan, renowned for its architectural and spiritual significance. The temple's name, "Byodo-In," translates to "Temple of Equality," reflecting its mission to inspire harmony and understanding among all living beings.</p>
            </div>
            <div className='Explore-Item6'> 
               <img src={koko} alt='koko-crater'/>
               <h2>Koko Crater</h2>
               <p>Reaching the summit of Koko Crater is a reward in itself. From this vantage point, you're treated to panoramic views that stretch across Oahu's stunning landscape. The turquoise waters of Hanauma Bay glisten in the distance, while the Pacific Ocean extends to the horizon. The sight of Diamond Head and the lush coastal terrain reminds you of the island's unique beauty.</p>
            </div>
          </div>
          {/* <div>
             <img src={bottom} alt="surfers" />
          </div> */}
      </div>
       );
}

export default Explore;