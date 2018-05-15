import React from 'react';
import PropTypes from 'prop-types';

const iframeStyle = {
    border: 0,
    width: '100%',
    height: '100%'
}

const iFrame = (props) => {
    return (
        <iframe 
            src={props.src} 
            style={iframeStyle}
            frameBorder="0"
            allowFullScreen
            title={props.title}>
        </iframe>
    )
}

iFrame.propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.object,
    title: PropTypes.string.isRequired
}

export default iFrame;