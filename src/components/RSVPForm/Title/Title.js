import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';

const title = (props) => {
    return (
        <Aux>
            <h2>
                {props.names.map((name) => {
                    return (
                        <span key={name} className={props.names.length >= 3 ? 'inline' : null}>{name}</span>
                    )
                })}  
            </h2>

        </Aux>
    )
}

title.propTypes = {
    names: PropTypes.array.isRequired
}

export default title;