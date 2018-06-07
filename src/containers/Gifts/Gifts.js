import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';

import './Gifts.scss';

import KuoniLogo from '../../assets/images/kuoni_logo.png';

const gifts = () => {
    return (
        <div className="gifts" id="gifts">
            <h3>Gifts</h3>
            <Wrapper>
                <div className="narrow-copy">
                    <p>We&apos;ve been asked what we&apos;d like for a gift and the answer is simple: you at our wedding, celebrating and dancing the night away with us!</p>
                    <p>If you insist on a gift, we would be grateful of a contribution towards our honeymoon to Cuba. We appreciate all your contributions, no matter what size: to help make our honeymoon a trip to remember!</p>
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