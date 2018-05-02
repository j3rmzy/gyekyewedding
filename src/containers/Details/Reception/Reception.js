import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import IFrame from '../../../components/UI/IFrame/IFrame';

import { Element } from 'react-scroll';

const reception = () => {
    return (
        <Element className="details-inner" name="reception">
            <h4>Reception</h4>
            <Wrapper>
                <div className="details-grid-container">
                    <div className="details-grid">
                        <p>Elmore Court, Gloucester, GL2 3NT</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                    </div>
                    <div className="map-grid">
                        <div className="map">
                            <IFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9861.416515199893!2d-2.31657!3d51.836228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe32fca519b86bd03!2sElmore+Court!5e0!3m2!1sen!2suk!4v1525176359554" title="Reception map"></IFrame>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Element>
    )
}

export default reception;