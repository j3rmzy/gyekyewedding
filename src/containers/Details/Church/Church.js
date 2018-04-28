import React from 'react';

import './Church.scss';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import IFrame from '../../../components/UI/IFrame/IFrame';

const church = () => {
    return (
        <div className="church">
            <h4>Church</h4>
            <Wrapper>
                <div className="church-grid-container">
                    <div className="church-grid">
                        <p>The Church of St John The Baptist,<br/>Elmore, Gloucester, GL2 3SP</p>
                        <p>The service will start at <strong>1.30pm</strong></p>
                        <p>Due to very limited car parking at the church, we have arranged coach transportation to the church from the reception venue. Coaches will depart from Elmore Court at the following times:<br/><strong>12.30pm</strong> & <strong>12.45pm</strong></p>
                        <p>Guests are advised to arrive at Elmore Court and park their cars in plenty of time for the above departures.</p>
                        <p>After the ceremony, coaches will be waiting to take guests back to Elmore Court for the reception.</p>
                    </div>
                    <div className="map-grid">
                        <div className="map">
                            <IFrame url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9861.987385360897!2d-2.3555324567924654!3d51.8336212750394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871a806c4a5abd1%3A0x4f32839aa9d64445!2sSt.+John+the+Baptist+Church!5e0!3m2!1sen!2suk!4v1524944790050" title="Church map"></IFrame>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default church;