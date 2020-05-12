import React, {useEffect, useCallback} from 'react'
import classes from './quiz-list.module.css';
import { Link } from 'react-router-dom';
import Loader from '../../components/ui/loader';
import {connect} from 'react-redux';
import { fetchQuizes } from '../../redux/action/quiz';

const QuizList = (props) => {

    const fetchData = useCallback(props.fetchQuizes, [props.fetchQuizes])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    const renderQuizes = () => {
        return props.quizes.map((quiz) => {
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
                    props.loading ?
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

function mapStateToProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading,
        error: state.quiz.error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizes: () =>  dispatch(fetchQuizes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
