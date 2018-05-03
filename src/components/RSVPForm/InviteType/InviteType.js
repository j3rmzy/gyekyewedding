import React from 'react';

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

export default inviteType;