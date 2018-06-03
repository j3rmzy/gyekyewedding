import React from 'react';
import PropTypes from 'prop-types';

import Names from './Title/Title';
import InviteType from './InviteType/InviteType';
import ReservedSeats from './ReservedSeats/ReservedSeats';
import FormInputs from './FormInputs/FormInputs';

import './RSVPForm.scss';

const rsvpForm = (props) => {
    //Seperate names from object
    const names = [];
    for (let obj in props.users) {
        if ((props.users[obj]) && (obj.indexOf('person') > -1)) {
            names.push(props.users[obj]);
        }
    }

    return (
        <div id="rsvp-form">
            <form onSubmit={props.submitForm}>
                <Names names={names} />
                <InviteType type={props.users.type} />
                {props.users.type === 'allday' ? 
                <ReservedSeats reservedSeats={props.users.attendees}/>
                : null}
                <FormInputs 
                    names={names} 
                    changed={props.updateFormInputs}
                    rsvp={props.users.rsvp}
                    dietary={props.users.dietary}
                    attendees={props.users.attendees}
                    selectedAttendees={props.users.selectedAttendees}
                    attendeeSelection={props.attendeeSelection} />
                <input type="submit" className="button" value="submit" disabled={props.disabled} />
            </form>
        </div>
    )
}

rsvpForm.propTypes = {
    users: PropTypes.object.isRequired,
    updateFormInputs: PropTypes.func,
    attendeeSelection: PropTypes.func,
    disabled: PropTypes.bool.isRequired
}

export default rsvpForm;