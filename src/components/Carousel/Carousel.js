import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss';

import IMG1 from '../../assets/images/image_1.jpg';
import IMG2 from '../../assets/images/image_2.jpg';
import IMG5 from '../../assets/images/image_5.jpg';
import IMG6 from '../../assets/images/image_6.jpg';
import IMG7 from '../../assets/images/image_7.jpg';
import IMG8 from '../../assets/images/image_8.jpg';
import IMG9 from '../../assets/images/image_9.jpg';
import IMG11 from '../../assets/images/image_11.jpg';
import IMG12 from '../../assets/images/image_12.jpg';
import IMG13 from '../../assets/images/image_13.jpg';
import IMG14 from '../../assets/images/image_14.jpg';

class SlideShowCarousel extends Component {
    render() {
        return (
            <Carousel 
                showArrows={false} 
                infiniteLoop
                emulateTouch
                showThumbs={false}
                autoPlay={true}
                showStatus={false}
                transitionTime={500}
                showIndicators={false}>
                <div><img alt="Michelle and Jermaine" src={IMG1} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG2} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG5} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG6} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG7} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG8} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG9} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG11} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG12} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG13} /></div>
                <div><img alt="Michelle and Jermaine" src={IMG14} /></div>
            </Carousel>
        )
    }
}

export default SlideShowCarousel;