import React from 'react';

const DateInput = (props) => {
    return (
        <input className="form-input input-date" type="datetime-local" {...props}/>
    )
};

export default DateInput;