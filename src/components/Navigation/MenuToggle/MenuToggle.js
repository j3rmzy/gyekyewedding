import React from 'react';
import PropTypes from 'prop-types';

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

menuToggle.propTypes = {
    onClick: PropTypes.func
}

export default menuToggle;