import React, { Component } from 'react';
import Slider from 'react-slick';

import './SlideShow.scss';

class SimpleSlider extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            adaptiveWidth: true,
            fade: true,
            dots: false,
            arrows: false,
            autoplay: true
        };

        return (
            <Slider {...settings}>
                <div>
                    <img alt="1" src="http://via.placeholder.com/2500x450?text=1" />
                </div>
                <div>
                    <img alt="2" src="http://via.placeholder.com/2500x450?text=2" />
                </div>
                <div>
                    <img alt="3" src="http://via.placeholder.com/2500x450?text=3" />
                </div>
                <div>
                    <img alt="4" src="http://via.placeholder.com/2500x450?text=4" />
                </div>
                <div>
                    <img alt="5" src="http://via.placeholder.com/2500x450?text=5" />
                </div>
            </Slider>
        )
    }
}

export default SimpleSlider;