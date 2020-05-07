import React from 'react'
import classes from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={classes.layout}>
            
            <main>
                {
                    children
                }
            </main>
        </div>
    )
}

export default Layout;
