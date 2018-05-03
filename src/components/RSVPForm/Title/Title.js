import React from 'react';

import Aux from '../../../hoc/Aux';

const Title = (props) => {
    return (
        <Aux>
            <h2>
                {props.names.map((name) => {
                    return (
                        <span>{name}</span>
                    )
                })}  
            </h2>

        </Aux>
    )
}

export default Title;