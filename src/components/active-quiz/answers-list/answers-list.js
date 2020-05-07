import React from 'react'
import classes from './answers-list.module.css';

import AnswerItem from './answer-item';

const AnswersList = ({ answers, onAnswerClick }) => {
    return (
        <ul className={classes['answers-list']}>
            {
                answers.map(({ answer, id }) => {
                    return (
                        <li 
                            key={id}
                            onClick={() => onAnswerClick(id)}
                            >
                            <AnswerItem answer={answer} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default AnswersList;
