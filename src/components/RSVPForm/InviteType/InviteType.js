import React from 'react';
import PropTypes from 'prop-types';

const inviteType = (props) => {
    let inviteTypeText = 'All day invitation';

    if (props.type === 'evening') {
        inviteTypeText = 'Evening invitation';
    }

    return (
        <div className="invite-type">
            {inviteTypeText}
        </div>
    )
}

inviteType.propTypes = {
    type: PropTypes.string.isRequired
}

export default inviteType;