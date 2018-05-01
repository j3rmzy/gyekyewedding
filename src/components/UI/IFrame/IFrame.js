import React from 'react';

const iframeStyle = {
    border: 0,
    width: '100%',
    height: '100%'
}

const IFrame = (props) => {
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

export default IFrame;