import React from 'react'
import classes from './input.module.css';

const Input = (props) => {

    const isInvalid = ({ valid, touched, shouldValidate }) => {
        return !valid && touched && shouldValidate
    }
    
    const inputType = props.type ? props.type : 'text';
    const htmlFor = inputType + Math.random();
    let cls = [classes.input];

    if ( isInvalid(props) ) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input value={props.value} onChange={props.onChange} id={htmlFor} type={inputType} onBlur={props.onBlur}/>
            {
                isInvalid(props) ?
                    <span className={classes.error}>{ props.errorMessage }</span>
                : null
            }
        </div>
    )
}

Input.defaultProps = {
    errorMessage: 'Введите правильное значение!'
}

export default Input;
