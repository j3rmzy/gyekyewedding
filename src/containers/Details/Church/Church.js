import React, { Component } from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import IFrame from '../../../components/UI/IFrame/IFrame';
import Modal from '../../../components/UI/Modal/Modal';

class Church extends Component {
    state = {
        showModal: false
    }

    toggleModalHandler = (event) => {
        console.log('here');
        event.preventDefault();

        this.setState((prevState) => {
            return {
                showModal: !prevState.showModal
            }
        })
    }

    render() {
        return (
            <div className="details-inner church-inner" >
                <h4>Church</h4>
                <Wrapper>
                    <div className="details-grid-container">
                        <div className="details-grid">
                            <p><strong>The Church of St John The Baptist<br/>Elmore, Gloucester <br/>GL2 3SP</strong></p>
                            <p>The service will start at 1.30pm and will last approximately 45 minutes.</p>
                            <p>One of our favourite things about attending church is singing along to the hymns. We have picked three of our favourite hymns for our ceremony so please bring your singing voices &ndash; we want to hear you sing!</p>
                            <p>After the ceremony, we are hoping to capture some of those classic confetti shots. Confetti will be provided and can be thrown outside in the church yard. If you wish to bring your own confetti, please make sure it is biodegradable (not plastic or tinfoil which stays with the church for years afterwards!).</p>
                            <p>We have been coming to this church since February 2017 and really hope you will love it as much as we do!</p>
                            <p><a className="white-link" href="#" onClick={this.toggleModalHandler} >Getting to The Church of St John The Baptist</a></p>

                        </div>
                        <div className="map-grid">
                            <div className="map">
                                <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9861.987385360897!2d-2.3555324567924654!3d51.8336212750394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871a806c4a5abd1%3A0x4f32839aa9d64445!2sSt.+John+the+Baptist+Church!5e0!3m2!1sen!2suk!4v1524944790050" title="Church map"></IFrame>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                {this.state.showModal ?
                <Modal show={this.state.showModal} closed={this.toggleModalHandler}>
                    <h3>Getting to The Church of St John The Baptist</h3>
                    <p>Due to very limited car parking at the church, we have arranged coach transportation to the church from the reception venue. Coaches will depart from Elmore Court at <strong>12:30pm</strong> and <strong>12:45pm</strong></p>
                    <p>Guests are advised to arrive at Elmore Court and park their cars in time for the above departures.</p>
                    <p>After the ceremony, coaches will be waiting to take you back to Elmore Court for the reception.</p>
                </Modal>
                : null}
            </div>
        )
    }
}

export default Church;