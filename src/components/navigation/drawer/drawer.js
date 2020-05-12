import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './drawer.module.css';
import Backdrop from '../../ui/backdrop';

const Drawer = ({ menu, onDrawerClick, isAuthenticated }) => {

    let cls = [classes['drawer']]
    if ( !menu ) {
        cls.push(classes.close);
    }
    let links = [
        { to: '/', label: 'Главная страница', exact: true },
        { to: '/auth', label: 'Авторизация', exact: false }
    ];

    if (isAuthenticated) {
        links = [
            { to: '/', label: 'Главная страница', exact: true },
            { to: '/quiz-creator', label: 'Создать тест', exact: false },
            { to: '/logout', label: 'Выйти', exact: false }
        ];
    }

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
