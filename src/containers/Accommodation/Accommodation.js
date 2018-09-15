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
                            Quedgeley, Gloucester, GL2 2AB<br/>
                            01452 726 400</p>
                            <p><a rel="noopener noreferrer" href="https://www.bit.ly/1iZGKM5" target="_blank">https://www.bit.ly/1iZGKM5</a></p>
                            <p>We have reserved a block of rooms for our guests the night before and night of our wedding.</p>
                            <p>If you wish to make a booking, please call the hotel directly and quote the code &apos;<strong>MC1</strong>&apos; when making your reservation. Rooms will be held until 22 August 2018 after which any rooms which have not been reserved will be released for general sale to the public. Please reserve your room early to avoid disappointment.</p>
                            <p>We have chosen this hotel as it is affordable, close to a pub (obviously!) and only a 10 minute taxi drive from the venue. Should you wish to stay somewhere else there is a great selection of unusual local hotels and accommodation nearby.</p>
                            <p>For a handful of the most popular local accommodation providers, please see the <a className="alternative-hotels" onClick={this.toggleModalHandler}>list</a>, otherwise, the most comprehensive and up to date list of establishments local to Elmore Court can found and downloaded in this PDF document: <a rel="noopener noreferrer"  href="http://bit.ly/2laLad7" target="_blank">http://bit.ly/2laLad7</a></p>
                        </div>
                        <div className="map-grid">
                            <div className="map">
                                <IFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.512281928466!2d-2.2798508842186838!3d51.81507172968685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871088974353aa3%3A0x5d5817c9ef1df3b8!2sTelford+Way%2C+Quedgeley%2C+Gloucester+GL2+2AB!5e0!3m2!1sen!2suk!4v1525182134865" title="Reception map"></IFrame>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                {this.state.showModal ?
                <Modal show={this.state.showModal} closed={this.toggleModalHandler}>
                    <h3>Alternative accommodation</h3>
                    <div className="alt-hotels-wrapper">
                        <div className="alt-hotels">
                            <h4>The Wharf House</h4>
                            <p>Over, Gloucester</p>
                            <p>GL2 8DB</p>
                            <p><a href="tel:01452332900" title="The Wharf House">01452 332 900</a></p>
                            <p><a rel="noopener noreferrer" target="_blank" href="http://www.thewharfhouse.co.uk/">The Wharf House</a></p>
                        </div>
                        <div className="alt-hotels">
                            <h4>Hallmark Hotel</h4>
                            <p>Gloucester</p>
                            <p>GL4 6EA</p>
                            <p><a href="tel:01452525653" title="Hallmark Hotel">01452 525653</a></p>
                            <p><a rel="noopener noreferrer" target="_blank" title="Hallmark Hotel" href="http://www.hallmarkhotels.co.uk/hotels/gloucester">Hallmark Hotel</a></p>
                        </div>
                        

                        <div className="alt-hotels">
                            <h4>The Painswick</h4>
                            <p>Painswick</p>
                            <p>GL6 6YB</p>
                            <p><a href="tel:01452813688" title="The Painswick">01452 813 688</a></p>
                            <p><a rel="noopener noreferrer" target="_blank" title="The Painswick" href="http://www.thepainswick.co.uk">The Painswick</a></p>
                        </div>
                        <div className="alt-hotels">
                            <h4>No. 131</h4>
                            <p>Cheltenham</p>
                            <p>GL50 1NW</p>
                            <p><a href="tel:01242822939" title="No. 131">01242 822 939</a></p>
                            <p><a rel="noopener noreferrer" target="_blank" href="http://theluckyonion.com/property/no-131/">No. 131</a></p>
                        </div>
                    </div>
                </Modal>
                : null}
            </div>
        )
    }

}

export default Accommodation;