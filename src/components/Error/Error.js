import React from 'react';
import PropTypes from 'prop-types';

import './Error.scss';

const error = (props) => {
    return (
        <p className="error-alert"><strong>Error!&nbsp;&nbsp;</strong> {props.error}</p>
    )
}

error.propTypes = {
    error: PropTypes.string
}

export default error;