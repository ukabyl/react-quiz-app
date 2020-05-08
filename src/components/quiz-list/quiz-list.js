import React from 'react'
import classes from './quiz-list.module.css';
import { Link } from 'react-router-dom';

const QuizList = () => {

    const renderQuizes = () => {
        return [1,2,3].map((quiz, index) => {
            return (
                <li key={index}>
                    <Link to={'/quiz/' + quiz}>{ quiz }</Link>
                </li>
            );
        })
    }    

    return (
        <div className={classes['quiz-list']}>
            <div>
                <h1>Список тестов</h1>
                <ul>
                    {
                        renderQuizes()
                    }
                </ul>
            </div>
        </div>
    )
}

export default QuizList;
