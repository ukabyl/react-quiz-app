import React from 'react'
import classes from './button.module.css';

const Button = ({ children, type, onClick, disabled }) => {
    let cls = [classes['button'], classes['button_' + type]];
    return (
        <button
            disabled={disabled} 
            className={cls.join(' ')}
            onClick={(e) => onClick ? onClick(e) : null}
            >
            { children }
        </button>
    )
}

export default Button;
