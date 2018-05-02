import React from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';

import { Element } from 'react-scroll';

const taxis = () => {
    return (
        <Element className="details-inner" name="taxis">
            <h4>Taxis</h4>
            <Wrapper>
                <div className="narrow-copy">
                    <p>Elmore Court have agreed fixed price taxi prices from various destinations with a firm called Andy Cars.</p>
                    <p><a tel="01452 523000">01452 523000</a></p>
                </div>
            </Wrapper>
        </Element>
    )
}

export default taxis;