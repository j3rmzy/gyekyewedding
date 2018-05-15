import React from 'react';
import PropTypes from 'prop-types';

const reservedSeats = (props) => {
    const seats = props.reservedSeats;

    return (
        <div className='reserved-seats'>
            We&apos;ve reserved {seats >= 2 ? seats + " seats" : "a seat"} in your {seats >= 2 ? "names" : "name" }
        </div>
    )
}

reservedSeats.propTypes = {
    reservedSeats: PropTypes.number.isRequired
}

export default reservedSeats;