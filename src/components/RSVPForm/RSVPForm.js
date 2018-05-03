import React, { Component } from 'react';

import Names from './Title/Title';
import InviteType from './InviteType/InviteType';
import ReservedSeats from './ReservedSeats/ReservedSeats';
import FormInputs from './FormInputs/FormInputs';
import Button from '../UI/Button/Button';

import './RSVPForm.scss';

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
                <InviteType inviteType={"All Day"} />
                <ReservedSeats reservedSeats={3} />
                <FormInputs />
                <Button title={"submit"}/>
            </div>
        )
    }
}

export default RSVPForm;