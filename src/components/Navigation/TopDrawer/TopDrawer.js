import React from 'react';

import BackDrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const topDrawer = (props) => {
    console.log(props.open);

    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <nav>
                <NavigationItems />
            </nav>
        </Aux>
    )
}

export default topDrawer;