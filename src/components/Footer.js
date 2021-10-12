import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import '../style/Footer.css';
import { Component } from "react";

class Footer extends Component{
  render() {
    return (
      <div className="footerColor">
        <div class="text-start text-light">
          <div class="container">
            <h3 className="pb-4 pt-4">
              <img src={instagram}></img>
            </h3>

            <h3 className="pb-4">
              <img src={linkedin}></img>
            </h3>

            <h3 className="pb-4">
              <img src={facebook}></img>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;