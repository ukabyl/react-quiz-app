import React from 'react'

import "./app.css";

const App = () => {
    return (
        <div className="app">
            <header className="header">
                <div className="header__icon">
                    <img alt="Logo" src=""></img>
                </div>
            </header>
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
            <main className="content">
                content
            </main>
        </div>
    );
}

export default App;