import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

import Wrapper from '../../hoc/Wrapper/Wrapper';

import MJIcon from '../../assets/images/mj-icon.png';

import './Home.scss';


class Home extends Component {
    render() {
        return (
            <div className="home" id="home">
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
                                <Link to="/rsvp/login" className="button">RSVP!</Link>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        )
    }
}

export default withRouter(Home);