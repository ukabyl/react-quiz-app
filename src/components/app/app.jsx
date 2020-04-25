import React from 'react'

import "./app.css";

import Header from '../header';
import Sidebar from '../sidebar/sidebar';
import Profile from '../profile/profile';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Sidebar />
            <Profile />
        </div>
    );
}

export default App;