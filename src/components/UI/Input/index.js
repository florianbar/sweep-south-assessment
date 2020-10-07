import React from 'react';

import classes from './index.module.css';

const Input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case "select":
            inputElement = (
                <select 
                    className={classes.input}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {props.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;

        default:
            inputElement = (
                <input 
                    className={classes.input} 
                    type={props.type}
                    value={props.value}
                    onChange={props.onChange} 
                    placeholder={props.placeholder}
                />
            );
    }

    return inputElement;
};

export default Input;