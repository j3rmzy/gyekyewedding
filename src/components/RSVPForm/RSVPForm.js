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
    for (let obj in props.users) {
        if (obj.indexOf('person') > -1) {
            names.push(props.users[obj]);
        }
    }

    return (
        <div id="rsvp-form">
            <Names names={names} />
            <InviteType inviteType={props.users.inviteType} />
            <ReservedSeats reservedSeats={props.users.attendees}/>
            <FormInputs 
                names={names} 
                changed={props.updateFormInputs}
                rsvp={props.users.rsvp}
                selectedAttendees={props.selectedAttendees}
                attendeeSelection={props.attendeeSelection} />
            <Button title={"submit"}/>
        </div>
    )
}

export default rsvpForm;