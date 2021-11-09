import React from 'react';

const NumberInput = (props) => {
    return (
        <input className="form-input input-text" type="number" {...props}/>
    )
};

export default NumberInput;