import React from 'react';
import classes from './select.module.css';

const Select = (props) => {
    const htmlFor = props.label + Math.random();

    return (
        <div className={classes.select}>
            <label htmlFor={htmlFor}>{ props.label }</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                {
                    props.options.map((option, index) => {
                        return (
                            <option
                                key={option.text + index}
                                value={option.value}
                            >
                                { option.text }
                            </option>
                        );
                    })
                }
            </select>
        </div>
    );
}

export default Select;