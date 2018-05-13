import React, { Component } from 'react';

import './Accommodation.scss';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import IFrame from '../../components/UI/IFrame/IFrame'; 
import Modal from '../../components/UI/Modal/Modal';

class Accommodation extends Component {
    state = {
        showModal: false
    }

    toggleModalHandler = (event) => {
        event.preventDefault();

        this.setState((prevState) => {
            return {
                showModal: !prevState.showModal
            }
        })
    }

    render() {
        return (
            <div className="accommodation" id="accommodation">
                <h3>Accommodation</h3>
                <Wrapper>
                    <div className="details-grid-container">
                        <div className="details-grid">
                            <p>The Express by Holiday Inn<br/>
                            Quedgeley, Gloucester, GL52 2AB<br/>
                            [Phone Number]</p>
                            <p><a rel="noopener noreferrer" href="https://www.bit.ly/1iZGKM5" target="_blank">https://www.bit.ly/1iZGKM5</a></p>
                            <p>A block of rooms has been reserved for our guests at a reduced rate for the night before and night of our wedding.</p>
                            <p>Please call the hotel direct and quote the code ‘MC1’ when making a reservation</p>
                            <button className="alternative-hotels top" onClick={this.toggleModalHandler}>View alternative hotels</button>
                        </div>
                        <div className="map-grid">
                            <div className="map">
                                <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.512281928466!2d-2.2798508842186838!3d51.81507172968685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871088974353aa3%3A0x5d5817c9ef1df3b8!2sTelford+Way%2C+Quedgeley%2C+Gloucester+GL2+2AB!5e0!3m2!1sen!2suk!4v1525182134865" title="Reception map"></IFrame>
                            </div>
                        </div>
                        <button className="alternative-hotels bottom" onClick={this.toggleModalHandler}>View alternative hotels</button>
                    </div>
                </Wrapper>
                {this.state.showModal ?
                <Modal show={this.state.showModal} closed={this.toggleModalHandler}>
                    <h3>Alternative accommodation</h3>
                    <h4>The Wharf House</h4>
                    <p>Over, Gloucester</p>
                    <p>GL2 8DB</p>
                    <p><a href="tel:01452332900" title="The Wharf House">01452 332 900</a></p>
                    <p><a rel="noopener noreferrer" target="_blank" href="http://www.thewharfhouse.co.uk/">The Wharf House</a></p>
                    <br/>
                    <h4>Premier Inn Gloucester (Longford)</h4>
                    <p>Tewkesbury Road</p>
                    <p>Gloucester</p>
                    <p>GL2 9BE</p>
                    <p><a href="tel:08715278460" title="Premier Inn Gloucester Longford">0871 527 8460</a></p>
                    <p><a rel="noopener noreferrer" target="_blank" title="Premier Inn Gloucester Longford" href="https://www.premierinn.com/gb/en/hotels/england/gloucestershire/gloucester/gloucester-longford.html">Premier Inn Gloucester (Longford)</a></p>
                    <br/>
                    <h4>Travelodge Gloucester</h4>
                    <p>Gloucester Quays, St Ann Way</p>
                    <p>Gloucester</p>
                    <p>GL1 5SF</p>
                    <p><a href="tel:08719846427" title="Travelodge">08719 846427</a></p>
                    <p><a rel="noopener noreferrer" target="_blank" href="https://www.travelodge.co.uk/hotels/395/Gloucester-hotel">Travelodge Gloucester</a></p>

                </Modal>
                : null}
            </div>
        )
    }

}

export default Accommodation;