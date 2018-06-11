import React from 'react';
import { Link } from 'react-router-dom';

const thanksPage = (props) => {
    return (
        <div className="thank-you">
            <p>Thank you for letting us know your availablility.</p>
            <p><strong><Link to="/" onClick={props.clicked}>Back to homepage</Link></strong></p>
        </div>
    )
}

export default thanksPage;