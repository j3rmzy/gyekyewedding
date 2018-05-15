import React from 'react';
import PropTypes from 'prop-types';

import './SignOut.scss';

const signOut = (props) => {
    return (
        <button className="button signout" onClick={props.signout}>Log out</button>
    )
}

signOut.propTypes = {
    onClick: PropTypes.func
}

export default signOut;