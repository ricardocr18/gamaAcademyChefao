import React, { Component } from "react";
import Slider from "react-slick";
import '../style/CardSliderTextoHome.css';

export default class CardSliderTextoHome extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 4,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <div className='h2'>
            <h2>O que dizem sobre nós?</h2>
        </div>  
        <Slider {...settings}>
          <div className="card-group"> 
            <p className="card-text">“Lorem Ipsum Dolor”</p>
            <p className="card-text">Cameron</p>
            <p className="card-text2">Estudante</p>
          </div>

          <div className="card-group"> 
            <p className="card-text">“Lorem Ipsum Dolor”</p>
            <p className="card-text">Bruno</p>
            <p className="card-text2">Mentor</p>
          </div>

            <div className="card-group"> 
            <p className="card-text">“Lorem Ipsum Dolor”</p>
            <p className="card-text">Priscilla</p>
            <p className="card-text2">Mentora</p>
            </div>

            <div className="card-group"> 
            <p className="card-text">“Lorem Ipsum Dolor”</p>
            <p className="card-text">João</p>
            <p className="card-text2">Estudante</p>
            </div>

                   

          
          
          
        </Slider>
      </div>
    );
  }
}