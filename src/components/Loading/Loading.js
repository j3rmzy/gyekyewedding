import React from 'react';

import MJIcon from '../../assets/images/mj-icon-loading.png';

import './Loading.scss';

const loading = () => {
    return (
        <div className="loading">
            <p>Loading</p>
            <img src={MJIcon} alt="M &amp; J Icon" />
        </div>
    )
}

export default loading;