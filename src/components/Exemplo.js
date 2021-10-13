import React, { Component } from "react";
import Slider from "react-slick";

class Exemplo extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 900,
            slidesToShow: 2,
            slidesToScroll: 1,
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
                        slidesToShow: 1,
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
                <div>
                    <p>Olá</p>
                </div>
                <div>
                    <p>Olá2</p></div>
                <div>
                    <p>Olá</p>
                </div>
                <div>
                    <p>Olá</p>
                </div>

            </div>
        )
    }
}

export default Exemplo;