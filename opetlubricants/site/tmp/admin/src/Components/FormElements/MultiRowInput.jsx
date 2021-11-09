import React from 'react';

const MultiRowInput = ({value, ...props}) => {
    return (
        <textarea className="form-input input-textarea" rows="4" value={value} {...props} />
    )
};

export default MultiRowInput;