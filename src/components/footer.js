import youtube from "./youtube.png";
import insta from "./instagram.png";
import facebook from "./facebook.png";

const Footer = () => {
  return (
    
      <div className="footer-section">
          <div className="footer-logo">
            <ul class="flex-container">
          <li>
            {/* <a href=" " target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook-icon" />
            </a> */}
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCfywvFdsGnl9g419UmelxjQ" target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="YouTube-icon" />
            </a>
          </li>
          <li>
            {/* <a href=" " target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram-icon" />
            </a> */}
          </li>
            </ul>
          </div>
            <div className="copyright">
              <p> @ Hawaii-Landing 2023. All rights reserved.
              </p>
            </div>
      </div>
  )
  };

export default Footer;