import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import linkedin from '../img/linkedin.png';
import '../style/Footer.css';
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footerColor">
        <div class="text-start text-light">
          <div class="container">
            <h3 className="pb-4 pt-4">
              <a target="_blank" href={'https://www.instagram.com/mentorando.engenharia/'}>
                <img src={instagram}  ></img>
              </a>
            </h3>

            <h3 className="pb-4">
              <a target="_blank" href={'https://www.linkedin.com/company/mentorando-engenharia/'}>
                <img src={linkedin}></img>
              </a>
            </h3>

            <h3 className="pb-4">
              <a target="_blank" href={'https://www.facebook.com/mentorando.engenharia/'}>
                <img src={facebook}></img>
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;