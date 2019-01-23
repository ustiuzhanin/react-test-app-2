import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '20px',
        margin: '20px',
        border: '1px solid black',
        textAlign: 'center'

    }

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;