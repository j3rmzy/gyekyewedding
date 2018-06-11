import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';


const taxis = () => {
    return (
        <div className="details-inner" id="taxis">
            <h4>Taxis</h4>
            <Wrapper>
                <div className="narrow-copy">
                    <p>We have agreed fixed price taxi prices from various destinations with a firm called Andy Cars. They can be reached on <a href="tel:01452 523000">01452 523000</a>.</p>
                </div>
            </Wrapper>
        </div>
    )
}

export default taxis;