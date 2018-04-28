import React from 'react';

import './Church.scss';

import Wrapper from '../../../hoc/Wrapper/Wrapper';

const church = () => {
    return (
        <div className="church">
            <h4>Church</h4>
            <Wrapper>
                <div className="copy">
                    <p>The Church of St John The Baptist,<br/>Elmore, Gloucester, GL2 3SP</p>
                    <p>The service will start at <strong>1.30pm</strong></p>
                    <p>Due to very limited car parking at the church, we have arranged coach transportation to the church from the reception venue. Coaches will depart from Elmore Court at the following times:<br/><strong>12.30pm</strong> & <strong>12.45pm</strong></p>
                    <p>Guests are advised to arrive at Elmore Court and park their cars in plenty of time for the above departures.</p>
                    <p>After the ceremony, coaches will be waiting to take guests back to Elmore Court for the reception.</p>
                </div>
                <div className="map">
                    Map
                </div>
            </Wrapper>
        </div>
    )
}

export default church;