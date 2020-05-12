import React, { useState } from 'react'
import classes from './layout.module.css'

import MenuToggle from '../../components/navigation/menu-toggle';
import Drawer from '../../components/navigation/drawer';
import { connect } from 'react-redux';

const Layout = ({ children, isAuthenticated }) => {

    const [menu, setMenu] = useState(false);

    const onMenuToggleHandler = () => {
        setMenu(!menu)
    }

    const onDrawerCloseHandler = () => {
        setMenu(false)
    }

    return (
        <div className={classes.layout}>
            <Drawer menu={menu} onDrawerClick={onDrawerCloseHandler} isAuthenticated={isAuthenticated} />
            <MenuToggle onMenuToggle={onMenuToggleHandler} menu={menu} />

            <main>
                {
                    children
                }
            </main>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);
