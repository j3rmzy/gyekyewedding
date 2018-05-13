import React from 'react';

const thanksPage = (props) => {
    return (
        <div className="thank-you">
            <p>Thank you for letting us know your availablility.</p>
            <button className="button thank-you" onClick={props.clicked}>Take me back to the homepage</button>
        </div>
    )
}

export default thanksPage;