import React from 'react'
import classes from './answer-item.module.css';

const AnswerItem = ({ answer }) => {
    return (
        <span className={classes['answer-item']}>
            { answer }
        </span>
    )
}

export default AnswerItem;
