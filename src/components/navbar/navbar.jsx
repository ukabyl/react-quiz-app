import React from 'react'
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to='/profile/'>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs/'>Messages</NavLink>
                </li>
                <li>
                    <NavLink to='/news/'>News</NavLink>
                </li>
                <li>
                    <NavLink to='/music/'>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/settings/'>Settings</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;