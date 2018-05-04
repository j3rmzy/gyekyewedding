import React from 'react';

const formInputs = (props) => {
    return (
        <div className="form-inputs">
            <div className="form-row">
                <span>Let us know if you&apos;ll be joining us?</span>
            </div>
            <div className="form-row">
                <input type="radio" 
                    name="rsvp" 
                    value="yes" 
                    id="RSVPYes" />
                    <label htmlFor="RSVPYes">Yes</label>
            </div>
            <div className="form-row">
                <input type="radio" 
                    name="rsvp" 
                    value="yes" 
                    id="RSVPNo" />
                    <label htmlFor="RSVPNo">No</label>
            </div>
            <div className="form-row">
                <input type="radio" 
                    name="rsvp" 
                    value="other" 
                    id="RSVPOther"  
                />
                <label htmlFor="RSVPOther">Unfortunately, not all of us can make it</label>
            </div>
            <div className="not-all">
                <div className="form-row">
                    <label htmlFor="other">It&apos;s a shame you cannot all make it.<br/>Please let us know who will be making the wedding:</label>
                </div>
                {props.names.map((name) => {
                    return (
                        <div key={name} className="form-row">
                            <input id={name} type="checkbox" />
                            <label htmlFor={name}>{name}</label>
                        </div>
                    )
                })}
            </div>
            <div className="form-row">
                <label htmlFor="dietary">Any dietary requirements?</label>
                <textarea id="dietary"
                    name="dietary" />
            </div>
        </div>
    )
}

export default formInputs;