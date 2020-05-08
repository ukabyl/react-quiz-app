import React from 'react'
import classes from './answer-item.module.css';

const AnswerItem = ({ answer, id, state }) => {

    let cls = [classes['answer-item']];
    if ( state ) {
        cls.push(classes[state])
    }

    return (
        <span className={cls.join(' ')}>
            { answer }
        </span>
    )
}

export default AnswerItem;
