import React from 'react'
import { Link } from 'react-router-dom';
import classes from './finished-quiz.module.css';

import Button from '../ui/button';

const FinishedQuiz = ({ quiz, results, onRetry }) => {
    const successCount = Object.keys(results).reduce((total, key) => {
        if ( results[key] === 'success' ) {
            total++;
        }
        return total;
    }, 0)
    return (
        <div>
            <h1>Ваши ответы</h1>
            <ul className={classes['finished-quiz-list']}>
                {
                    quiz.map((quizItem, index) => {
                        const cls = [
                            'fa',
                            results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                            classes[results[quizItem.id]]
                        ];

                        return (
                            <li key={index}>
                                <strong>{index + 1}. </strong>&nbsp;
                                {quizItem.question}
                                <i className={cls.join(' ')} />
                            </li>
                        );
                    })
                }
            </ul>
            <p>
                Правильно { successCount } из { quiz.length }
            </p>
            <Button onClick={onRetry} type="primary">Начать заново</Button>
            <Link to="/"><Button type="success">Список тестов</Button></Link>
        </div>
    )
}

export default FinishedQuiz;
