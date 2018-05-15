import React from 'react';
import PropTypes from 'prop-types';

const inviteType = (props) => {
    let inviteTypeText = 'All day invitation';

    if (props.inviteType === 'evening') {
        inviteTypeText = 'Evening invitation';
    }

    return (
        <div className="invite-type">
            {inviteTypeText}
        </div>
    )
}

inviteType.propTypes = {
    inviteType: PropTypes.string.isRequired
}

export default inviteType;