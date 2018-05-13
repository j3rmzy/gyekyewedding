import React, { Component } from 'react';

import Wrapper from '../../../hoc/Wrapper/Wrapper';
import IFrame from '../../../components/UI/IFrame/IFrame';
import Modal from '../../../components/UI/Modal/Modal';

class Reception extends Component {
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
            <div className="details-inner" id="reception">
                <h4>Reception</h4>
                <Wrapper>
                    <div className="details-grid-container">
                        <div className="details-grid">
                            <p><strong>Elmore Court<br/> Gloucester<br/> GL2 3NT</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate</p>
                            <button className="white-link" href="#" onClick={this.toggleModalHandler} >Directions</button>
                        </div>
                        <div className="map-grid">
                            <div className="map">
                                <IFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9861.416515199893!2d-2.31657!3d51.836228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe32fca519b86bd03!2sElmore+Court!5e0!3m2!1sen!2suk!4v1525176359554" title="Reception map"></IFrame>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                {this.state.showModal ?
                <Modal show={this.state.showModal} closed={this.toggleModalHandler}>
                    <h3>Directions to Elmore Court</h3>
                    <h4>Car</h4>
                    <p>If you have 'Satnav' the postcode, GL2 3NT, will take you to just outside the main house. You can't miss it... Enter through the ornate gates.</p>
                    <p>If you don't have a 'Satnav' then these are the directions: We are off Junction 12 of the M5 which is just south of Gloucester... After exiting the motorway on Junction 12, head west (towards Gloucester) on the B4008 for about quarter of a mile until you get to a roundabout (you will see a McDonalds on the left) and then turn right signposted for Gloucester on the A38. After a few hundred meters, filter left onto the B4008 and follow on until you get to a roundabout where you turn left onto 'Field Court Drive’. Follow this road until you get to another roundabout where you turn left again onto 'School Lane'. Follow this road straight over 2 mini roundabouts and over a canal bridge (by a pub called 'The Pilot Inn’). You will suddenly find yourself in very rural countryside... Follow this small road for about 1 mile until you come up a gentle hill and enter the drive through some very large ornate green gates on your right hand side. You can't miss them!</p>
                    <p>This route from the M5 is signposted to make life easier.</p>
                    <br/>
                    <h4>Train</h4>
                    <p>The nearest train station is Gloucester which is 15 minutes from Elmore and taxis are in plentiful supply at the station. We recommend Andy Cars as they know Elmore very well. Stonehouse is 20 minutes away but one stop closer to London. We would recommend booking a taxi from Stonehouse it is a little further out of town and taxis are a bit harder to come across.</p>
                </Modal>
                : null}
            </div>
        )
    }
}

export default Reception;