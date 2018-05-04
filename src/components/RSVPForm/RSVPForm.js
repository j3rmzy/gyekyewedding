import React, { Component } from 'react';

import Names from './Title/Title';
import InviteType from './InviteType/InviteType';
import ReservedSeats from './ReservedSeats/ReservedSeats';
import FormInputs from './FormInputs/FormInputs';
import Button from '../UI/Button/Button';

import './RSVPForm.scss';

const data = {
    personOne: "Jermaine Gyekye",
    personTwo: "Michelle Cook",
    inviteType: "allday",
    attendees: 2,
    dietary: null,
    rsvp: null,
    details: null
}

class RSVPForm extends Component {
    state = {
        users: {
            ...data
        },
        error: null,
        sending: false,
        submitted: false
    }

    render() {
        let {
            attendees,
            inviteType
        } = this.state.users;

        //Seperate names from object
        const names = [];
        for (let obj in this.state.users) {
            if (obj.indexOf('person') > -1) {
                names.push(data[obj]);
            }
        }

        return (
            <div id="rsvp-form">
                <Names names={names} />
                <InviteType inviteType={inviteType} />
                <ReservedSeats reservedSeats={attendees}/>
                <FormInputs names={names}/>
                <Button title={"submit"}/>
            </div>
        )
    }
}

export default RSVPForm;