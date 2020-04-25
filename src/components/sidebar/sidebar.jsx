import React from 'react'
import './sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
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
        </aside>
    );
}

export default Sidebar;