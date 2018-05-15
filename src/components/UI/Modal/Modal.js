import React from 'react';
import PropTypes from 'prop-types';

import BackDrop from '../Backdrop/Backdrop';

import './Modal.scss';

const modal = (props) => {
    return (
        <div className="modal">
            <BackDrop show={props.show} clicked={props.closed} />
            <div className="modal-inner">
                <span className="close-modal" onClick={props.closed}>X</span>
                {props.children}
            </div>
        </div>
    )
}

modal.propTypes = {
    show: PropTypes.func,
    clicked: PropTypes.func,
    onClick: PropTypes.func
}

export default modal;