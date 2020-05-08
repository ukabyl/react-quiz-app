import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './drawer.module.css';
import Backdrop from '../../ui/backdrop';

const Drawer = ({ menu, onDrawerClick }) => {

    let cls = [classes['drawer']]
    if ( !menu ) {
        cls.push(classes.close);
    }

    const links = [
        { to: '/', label: 'Главная страница', exact: true },
        { to: '/quiz-creator', label: 'Создать тест', exact: false },
        { to: '/auth', label: 'Авторизация', exact: false }
    ];

    return (
        <>
            { menu && <Backdrop menu={menu} onClick={onDrawerClick} /> }
            <nav className={cls.join(' ')}>
                <ul>
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <NavLink 
                                        to={link.to}
                                        exact={link.exact}
                                        activeClassName={classes.active}
                                        onClick={() => onDrawerClick()}
                                        >
                                        { link.label }
                                    </NavLink>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Drawer;
