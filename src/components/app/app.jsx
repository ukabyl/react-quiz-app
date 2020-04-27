import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./app.css";

import Header from '../header';
import Sidebar from '../sidebar';

import Profile from '../profile';
import Dialogs from '../dialogs'

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header/>
                <Sidebar />
                <div className="content">
                    <Route path="/profile" component={Profile} />
                    <Route path="/dialogs" component={Dialogs} />
                </div>
            </div>
        </Router>
    );
}

export default App;