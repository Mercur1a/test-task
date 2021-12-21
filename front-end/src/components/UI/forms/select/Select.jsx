import React from 'react';
import classes from './Select.module.css';

const Select = ({options, value, onChange, defaultValue}) => {
    return (
        <select
            className={classes.select}
            onChange={onChange}
            value={value}
        >
            <option>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};

export default Select;