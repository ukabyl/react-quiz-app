import React, {useEffect, useState} from 'react'
import classes from './quiz-list.module.css';
import { Link } from 'react-router-dom';
import axios from '../../axios/axios-quiz';
import Loader from '../../components/ui/loader';

const QuizList = () => {

    const [state, setState] = useState({ quizes: [], loading: true });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/quizes.json');
                const quizes = [];
                Object.keys(response.data).forEach((key, index) => {
                    quizes.push({
                        id: key,
                        name: 'Тест №' + index + 1
                    })
                })
                setState({ quizes, loading: false })
            } catch(e) {
                console.log(e)
            }
        }
        fetchData();
    }, [])    
    const renderQuizes = () => {
        return state.quizes.map((quiz) => {
            return (
                <li key={quiz.id}>
                    <Link to={'/quiz/' + quiz.id}>{ quiz.name }</Link>
                </li>
            );
        })
    }

    return (
        <div className={classes['quiz-list']}>
            <div>
                <h1>Список тестов</h1>
                {
                    state.loading ?
                        <Loader />
                        : <ul>
                            {
                                renderQuizes()
                            }
                        </ul>
                }
            </div>
        </div>
    )
}

export default QuizList;
