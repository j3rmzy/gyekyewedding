import React from 'react';

import Church from './Church/Church';
import Reception from './Reception/Reception';
import Taxis from './Taxis/Taxis';

import './Details.scss';

import { Element } from 'react-scroll';

const Details = () => {
    return (
        <Element className="details" name="church">
            <h3>Details</h3>
            <Church />
            <Reception />
            <Taxis />
        </Element>
    )
}


export default Details;