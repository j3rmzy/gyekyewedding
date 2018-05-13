import React from 'react';

import './Button.scss';

const button = (props) => {
    return (
        <button className="button" onClick={props.clicked} disabled={props.disabled}>{props.title}</button>
    )
}

export default button;