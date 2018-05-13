import React from 'react';

import Church from './Church/Church';
import Reception from './Reception/Reception';
import Taxis from './Taxis/Taxis';

import './Details.scss';

const Details = () => {
    return (
        <div className="details" id="church">
            <h3>Details</h3>
            <Church />
            <Reception />
            <Taxis />
        </div>
    )
}


export default Details;