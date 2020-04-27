import React from 'react'
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to='/profile/'>Profile</Link>
                </li>
                <li>
                    <Link to='/dialogs/'>Messages</Link>
                </li>
                <li>
                    <Link to='/news/'>News</Link>
                </li>
                <li>
                    <Link to='/music/'>Music</Link>
                </li>
                <li>
                    <Link to='/settings/'>Settings</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;