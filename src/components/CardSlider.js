import React, { Component } from "react";
import Slider from "react-slick";
import "../../src/App.css";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";

export default class CardSlider extends Component {
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
        <Slider {...settings}>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img1} alt="" />
              <div className="card-body">
                <p className="card-text">Engenharia</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img2} alt="" />
              <div className="card-body">
                <p className="card-text">Engenharia</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img3} alt="" />
              <div className="card-body">
                <p className="card-text">Farmácia</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img4} alt="" />
              <div className="card-body">
                <p className="card-text">Tecnologia</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className=" pt-3 card-img-top" src={img5} alt="" />
              <div className="card-body">
                <p className="card-text">Engenharia</p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className=" pt-3 card-img-top" src={img1} alt="" />
              <div className="card-body">
                <p className="card-text">Gestão de RH</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
