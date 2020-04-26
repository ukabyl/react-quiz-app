import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <a href='#'>Menu 1</a>
                </li>
                <li>
                    <a href='#'>Menu 2</a>
                </li>
                <li>
                    <a href='#'>Menu 3</a>
                </li>
                <li>
                    <a href='#'>Menu 4</a>
                </li>
                <li>
                    <a href='#'>Menu 5</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;