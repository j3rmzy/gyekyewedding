import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import IFrame from '../../../components/UI/IFrame/IFrame';

const church = () => {
    return (
        <div className="details-inner">
            <h4>Church</h4>
            <Wrapper>
                <div className="details-grid-container">
                    <div className="details-grid">
                        <p>The Church of St John The Baptist,<br/>Elmore, Gloucester, GL2 3SP</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                    </div>
                    <div className="map-grid">
                        <div className="map">
                            <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9861.987385360897!2d-2.3555324567924654!3d51.8336212750394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871a806c4a5abd1%3A0x4f32839aa9d64445!2sSt.+John+the+Baptist+Church!5e0!3m2!1sen!2suk!4v1524944790050" title="Church map"></IFrame>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default church;