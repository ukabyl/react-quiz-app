import React from 'react'
import classes from './menu-toggle.module.css';


const MenuToggle = ({ menu, onMenuToggle }) => {

    let cls = [classes['menu-toggle'], 'fa'];
    if ( menu ) {
        cls.push('fa-times')
        cls.push(classes['opened'])
    } else {
        cls.push('fa-bars')
    }

    return (
        <i 
            className={cls.join(' ')}
            onClick={() => onMenuToggle()}/>
    )
}

export default MenuToggle;
