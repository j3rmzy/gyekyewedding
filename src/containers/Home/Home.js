import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';

import MJIcon from '../../assets/images/mj-icon.svg';

import './Home.scss';

const Home = () => {
    return (
        <div className="home paper-bg">
            <Wrapper>
                <div className="home-grid-container">
                    <div className="grid-item">
                        <div className="icon-container">
                            <img src={MJIcon} className="img-responsive mj-icon" alt="M &amp; J icon" />
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="title">
                            <h1>Michelle Cook <br/><span>&amp;</span><br/>Jermaine Gyekye</h1>
                            <p>Are getting married!</p>
                            <p className="date">Saturday 22<sup>nd</sup> September 2018</p>
                            <a href="#" className="button" alt="RSVP Here">RSVP!</a>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Home;