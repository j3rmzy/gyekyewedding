import React from 'react';

import Names from './Title/Title';
import InviteType from './InviteType/InviteType';
import ReservedSeats from './ReservedSeats/ReservedSeats';
import FormInputs from './FormInputs/FormInputs';
import Button from '../UI/Button/Button';

import './RSVPForm.scss';

const rsvpForm = (props) => {
    //Seperate names from object
    const names = [];
    // for (let obj in this.state.users) {
    //     if (obj.indexOf('person') > -1) {
    //         names.push(data[obj]);
    //     }
    // }

    return (
        <div id="rsvp-form">
            <Names names={names} />
            <InviteType inviteType={props.inviteType} />
            <ReservedSeats reservedSeats={props.attendees}/>
            <FormInputs names={names}/>
            <Button title={"submit"}/>
        </div>
    )
}

export default rsvpForm;