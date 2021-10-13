import React, { Component } from "react";
import Slider from "react-slick";

import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';
import img5 from '../img/img5.png';

class CardMentores extends Component {
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
      <div className="fontStyle">
        <h2 className="pt-5 pb-4">Mentores Recomendados</h2>
        <Slider {...settings}>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img5} alt="" />
              <div className="card-body">
                <p className="card-text">
                  lorem <br /> Ciência <br /> ★ ★ ★ ★ ☆
                </p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img2} alt="" />
              <div className="card-body">
                <p className="card-text">
                  Miguel <br /> Engenharia <br /> ★ ★ ★ ☆ ☆
                </p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img3} alt="" />
              <div className="card-body">
                <p className="card-text">
                  Cláudio <br /> Farmácia <br /> ★ ★ ★ ☆ ☆
                </p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className="pt-3 card-img-top" src={img4} alt="" />
              <div className="card-body">
                <p className="card-text">
                  Julia <br /> Tecnologia <br /> ★ ★ ★ ★ ☆
                </p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className=" pt-3 card-img-top" src={img5} alt="" />
              <div className="card-body">
                <p className="card-text">
                  Fernando <br />
                  Engenharia <br /> ★ ★ ★ ★ ☆
                </p>
              </div>
            </div>
          </div>
          <div className="card-group">
            <div className="card">
              <img className=" pt-3 card-img-top" src={img1} alt="" />
              <div className="card-body">
                <p className="card-text">
                  Pedro <br /> Gestão de RH <br /> ★ ★ ★ ★ ☆
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CardMentores;