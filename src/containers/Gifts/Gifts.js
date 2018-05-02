import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';

import './Gifts.scss';

import KuoniLogo from '../../assets/images/kuoni_logo.svg';

const gifts = () => {
    return (
        <div className="gifts" id="gifts">
            <h3>Gifts</h3>
            <Wrapper>
                <div className="narrow-copy">
                    <p>Your presence at our wedding is gift  enough, but if you do wish to buy us  something, a contribution towards our  dream honeymoon would be appreciated.</p>
                    <p>Click the logo below to be taken to the Kuoni gift list.</p>
                    <p>Kuoni Gift List number: <strong>35190</strong></p>
                    <a rel="noopener noreferrer" href="https://www.kuoni.co.uk/giftlist" target="_blank">
                        <img alt="Kuoni Logo" className="kuoni-logo" src={KuoniLogo} />
                    </a>
                </div>
            </Wrapper>
        </div>
    )
}

export default gifts;