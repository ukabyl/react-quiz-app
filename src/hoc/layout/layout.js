import React, { useState } from 'react'
import classes from './layout.module.css'

import MenuToggle from '../../components/navigation/menu-toggle';
import Drawer from '../../components/navigation/drawer';

const Layout = ({ children }) => {

    const [menu, setMenu] = useState(false);

    const onMenuToggleHandler = () => {
        setMenu(!menu)
    }

    const onDrawerCloseHandler = () => {
        setMenu(false)
    }

    return (
        <div className={classes.layout}>
            <Drawer menu={menu} onDrawerClick={onDrawerCloseHandler} />
            <MenuToggle onMenuToggle={onMenuToggleHandler} menu={menu} />

            <main>
                {
                    children
                }
            </main>
        </div>
    )
}

export default Layout;
