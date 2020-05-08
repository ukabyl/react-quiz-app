import React from 'react'
import classes from './button.module.css';

const Button = ({ children, type, onClick }) => {
    let cls = [classes['button'], classes['button_' + type]];

    return (
        <button 
            className={cls.join(' ')}
            onClick={() => onClick ? onClick() : null}
            >
            { children }
        </button>
    )
}

export default Button;
