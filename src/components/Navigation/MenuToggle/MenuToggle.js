import React from 'react';

import './MenuToggle.scss';

const menuToggle = (props) => {
    return (
        <button className="burger-menu" onClick={props.open}>
            <div></div>
            <div></div>
            <div></div>
        </button>
    )
}

export default menuToggle;