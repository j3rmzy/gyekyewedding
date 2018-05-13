import React from 'react';

const reservedSeats = (props) => {
    const seats = props.reservedSeats;

    return (
        <div className='reserved-seats'>
            We&apos;ve reserved {seats >= 2 ? seats + " seats" : "a seat"} in your {seats >= 2 ? "names" : "name" }
        </div>
    )
}

export default reservedSeats;