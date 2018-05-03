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

const names = [
    "Jermaine Gyekye",
    "Michelle Cook"
]

class RSVPForm extends Component {
    state = {

    }

    render() {
        return (
            <div id="rsvp-form">
                <Names names={names} />
                <InviteType inviteType={"allday"} />
                <ReservedSeats reservedSeats={2}/>
                <FormInputs names={names}/>
                <Button title={"submit"}/>
            </div>
        )
    }
}

export default RSVPForm;