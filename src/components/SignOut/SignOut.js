import React from 'react';

import './SignOut.scss';

const signOut = (props) => {
    return (
        <button className="button signout" onClick={props.signout}>Log out</button>
    )
}

export default signOut;