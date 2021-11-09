import React from 'react';

const Combobox = (props) => {
    const {options, ...otherProps} = props;

    return (
        <select className="form-input input-text" {...otherProps}>
            {
                options.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))
            }
        </select>
    )
};

export default Combobox;