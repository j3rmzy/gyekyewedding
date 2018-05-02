import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Element } from 'react-scroll';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Button from '../../components/UI/Button/Button';

import MJIcon from '../../assets/images/mj-icon.svg';

import './Home.scss';


class Home extends Component {
    goToRSVP = () => {
        this.props.history.push('/rsvp/login');
    }

    render() {
        return (
            <Element className="home" name="home" id="home">
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
                                <Button title="RSVP!" clicked={this.goToRSVP} />
                                {/* <a className="button" alt="RSVP Here">RSVP!</a> */}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Element>
        )
    }
}

export default withRouter(Home);