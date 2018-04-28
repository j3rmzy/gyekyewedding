import React from 'react';
import Wrapper from '../../hoc/Wrapper/Wrapper';

import MJIcon from '../../assets/images/mj-icon.svg';

import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Wrapper>
                <div className="home-grid-container">
                    <div className="icon-grid">
                        <div className="icon-container">
                            <img src={MJIcon} className="img-responsive mj-icon" alt="M &amp; J icon" />
                        </div>
                    </div>
                    <div className="title-grid">
                        <div className="title">
                            <h1>Michelle Cook <span>&amp;</span> Jermaine Gyekye</h1>
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