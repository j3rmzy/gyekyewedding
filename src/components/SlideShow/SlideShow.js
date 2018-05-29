import React, { Component } from 'react';
import Slider from 'react-slick';

import './SlideShow.scss';

import IMG1 from '../../assets/images/abstract03.jpg';
import IMG2 from '../../assets/images/abstract04.jpg';
import IMG3 from '../../assets/images/image_3.jpg';
import IMG4 from '../../assets/images/image_4.jpg';

class SimpleSlider extends Component {
    render() {
        var settings = {
            // infinite: true,
            // speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1,
            // fade: true,
            dots: false,
            arrows: false,
            // autoplay: true
        };

        return (
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        )
    }
}

export default SimpleSlider;