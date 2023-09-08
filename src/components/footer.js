import youtube from "./youtube.png";
import insta from "./instagram.png";
import facebook from "./facebook.png";

const Footer = () => {
  return (
    
      <div className="footer-section">
          <div className="footer-logo">
            <ul class="flex-container">
              <li> <img src={facebook} alt="Facebook" /></li>
              <li> <img src={youtube} alt="Facebook" /></li>
              <li> <img src={insta} alt="Facebook" /></li>
            </ul>
          </div>
            <div className="copyright">
              <p> @ Hawaii Landing 2023. All rights reserved.
              </p>
            </div>
      </div>
  )
  };

export default Footer;