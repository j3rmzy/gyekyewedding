import React from 'react';
import './Wrapper.scss';

const wrapper = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

export default wrapper;