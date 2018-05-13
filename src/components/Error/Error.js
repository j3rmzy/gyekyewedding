import React from 'react';

import './Error.scss';

const error = (props) => {
    return (
        <p className="error-alert"><strong>Error!&nbsp;&nbsp;</strong> {props.error}</p>
    )
}

export default error;