import React from 'react';

const reservedSeats = (props) => {
    return (
        <div className='reserved-seats'>
            You have {props.reservedSeats} seats in your name
        </div>
    )
}

export default reservedSeats;