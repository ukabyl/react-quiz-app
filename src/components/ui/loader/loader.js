import React from 'react'
import classes from './loader.module.css'

const loader = () => {
    return (
        <div className={classes['loader-wrapper']}>
            <div className={classes.loader}><div /><div/><div/><div/><div/><div/><div/><div /></div>
        </div>
    )
}

export default loader
