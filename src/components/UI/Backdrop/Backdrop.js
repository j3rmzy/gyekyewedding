import React from 'react';
import PropTypes from 'prop-types';

import './Backdrop.scss';

const backDrop = (props) => {
    return props.show ? <div className="backdrop" onClick={props.clicked}></div> : null;
}

backDrop.propTypes = {
    onClick: PropTypes.func
}

export default backDrop;