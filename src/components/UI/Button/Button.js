import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const button = (props) => {
    return (
        <button className="button" onClick={props.clicked} disabled={props.disabled}>{props.title}</button>
    )
}

button.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool.isRequired
}

export default button;