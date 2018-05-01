import React from 'react';

import './Accommodation.scss';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import IFrame from '../../components/UI/IFrame/IFrame'; 

const accommodation = (props) => {
    return (
        <div className="accommodation">
            <h3>Accommodation</h3>
            <Wrapper>
                <div className="details-grid-container">
                    <div className="details-grid">
                        <p>The Express by Holiday Inn<br/>
                        Quedgeley, Gloucester, GL52 2AB<br/>
                        [Phone Number]</p>
                        <p><a rel="noopener noreferrer" href="https://www.bit.ly/1iZGKM5" target="_blank">https://www.bit.ly/1iZGKM5</a></p>
                        <p>A block of rooms has been reserved for our guests at a reduced rate for the night before and night of our wedding.</p>
                        <p>Please call the hotel direct and quote the code ‘MC1’ when making a reservation</p>
                        <p className="alternative-hotels top"><a href="#">View alternative hotels</a></p>
                    </div>
                    <div className="map-grid">
                        <div className="map">
                            <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.512281928466!2d-2.2798508842186838!3d51.81507172968685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871088974353aa3%3A0x5d5817c9ef1df3b8!2sTelford+Way%2C+Quedgeley%2C+Gloucester+GL2+2AB!5e0!3m2!1sen!2suk!4v1525182134865" title="Reception map"></IFrame>
                        </div>
                    </div>
                    <p className="alternative-hotels bottom"><a href="#">View alternative hotels</a></p>
                </div>
            </Wrapper>
        </div>
    )
}

export default accommodation;