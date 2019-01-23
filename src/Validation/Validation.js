import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength < 5) {
        validationMessage = 'Text too sort';
    }

    return (
        <p>{validationMessage}</p>
    );
} 

export default validation;