import React from 'react';

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


export default modal;