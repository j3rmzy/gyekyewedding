import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../UI/Checkboxes/Checkboxes';

const formInputs = (props) => {
    return (
        <div className="form-inputs">
            <div className="form-row">
                <span>We hope you can join us!</span>
            </div>
            <div className="form-row radio">
                <input type="radio" 
                    name="rsvp" 
                    value="yes" 
                    id="RSVPYes"
                    onChange={props.changed}
                    checked={props.rsvp === 'yes'} />
                    <label htmlFor="RSVPYes">Wouldn&apos;t miss it for the world</label>
            </div>
            <div className="form-row radio">
                <input type="radio" 
                    name="rsvp" 
                    value="no" 
                    id="RSVPNo"
                    onChange={props.changed}
                    checked={props.rsvp === 'no'} />
                    <label htmlFor="RSVPNo">Will be there in spirit</label>
            </div>
            {props.attendees === 2
                ? <div className="form-row radio">
                    <input type="radio" 
                        name="rsvp" 
                        value="other" 
                        id="RSVPOther"
                        onChange={props.changed}
                        checked={props.rsvp === 'other'} />
                    <label htmlFor="RSVPOther">Unfortunately, not all of us can make it</label>
                </div>
                : null}
            {props.rsvp === 'other' ?
            <div className="not-all">
                <div className="form-row">
                    <label htmlFor="other">It&apos;s a shame you cannot all make it.<br/>Please let us know who will be making the wedding:</label>
                </div>
                {props.names.map((name) => {
                    return (
                        <div key={name} className="form-row checkbox">
                            <Checkbox
                                label={name}
                                selectedAttendees={props.selectedAttendees}
                                handleCheckboxChange={props.attendeeSelection} />
                        </div>
                    )
                })}
            </div>
            : null}
            {props.type === 'allday'
            ? <div className="form-row dietary-req">
                <label htmlFor="dietary">Any dietary requirements?</label>
                <textarea id="dietary" name="dietary" 
                    onChange={props.changed}
                    value={props.dietary} />
            </div>
            : null }
        </div>
    )
}

formInputs.propTypes = {
    onChange: PropTypes.func,
    rsvp: PropTypes.bool.isRequired,
    label: PropTypes.string,
    selectedAttendees: PropTypes.array,
    handleCheckboxChange: PropTypes.func,
    value: PropTypes.string
}

export default formInputs;