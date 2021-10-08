import React, { Component } from 'react';
import Slider from "react-slick";
import "./estilo.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class SobreNos extends Component {
    render() {
        const settings = {
        
         
          infinite: true,
          slidesToScroll: 2,
          slidesToShow: 2,
          speed: 500
        };

        return (
            
          <div className= 'SobreNos'>
            <h2> O que dizem sobre nós</h2>
            <Slider {...settings}>
              <div>
                <h4>Mentorando 10</h4>
                <h3>Cameron</h3>
                <h5>Estudante</h5>
              </div>
              <div>
              <h4>Mentorando 20</h4>
                <h3>Priscila</h3>
                <h5>Mentora</h5>
              </div>
              <div>
              <h4>Mentorando 30</h4>
                <h3>Bruno</h3>
                <h5>Empresa</h5>
              </div>
              <div>
              <h4>Mentorando 40</h4>
                <h3>Bruno</h3>
                <h5>Empresa</h5>
              </div>
              
            </Slider>
          </div>
        );
    }
                  
}

export default SobreNos;