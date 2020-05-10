import React, {useState} from 'react';
import classes from './quiz-creator.module.css';
import Input from '../../components/ui/input'
import {formFramework, validate, validateForm} from '../../form/form-framework';
import Auxiliary from '../../components/auxiliary'
import Button from '../../components/ui/button';
import Select from '../../components/ui/select';
import axios from 'axios';


function createOptionCotrol(number) {
    return formFramework({
        label: 'Вариант ' + number,
        errorMessage: 'Значение не может быть пустым',
        id: number,
    }, { required: true })
}

function createFormCotrols() {
    return {
        question: formFramework({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым'
        }, { required: true }),
        option1: createOptionCotrol(1),
        option2: createOptionCotrol(2),
        option3: createOptionCotrol(3),
        option4: createOptionCotrol(4),
    }
}

const QuizCreator = () => {

    const [state, setState] = useState({
        quiz: [],
        isFormValid: false,
        rightAnswerId: 1,
        formControls: createFormCotrols()
    });

    const submitHandler = () => {
        console.log('submit')
    }

    function addQuestion(e) {
        e.preventDefault();

        const { question, option1, option2, option3, option4 } = state.formControls;
        const index = state.quiz.length + 1;
        const quiz = state.quiz;

        let quizItem = {
            id: index,
            question: question.value,
            rightAnswerId: state.rightAnswerId,
            answers: [
                { id: option1.id, answer: option1.value },
                { id: option2.id, answer: option2.value },
                { id: option3.id, answer: option3.value },
                { id: option4.id, answer: option4.value },
            ]
        }
        quiz.push(quizItem);

        setState({
            quiz,
            isFormValid: false,
            rightAnswerId: 1,
            formControls: createFormCotrols()
        });
    }

    async function createQuiz(e) {
        e.preventDefault();
        
        try {
            await axios.post('https://react-quiz-3d8cb.firebaseio.com/quizes.json', state.quiz);
            
            setState({
                quiz: [],
                isFormValid: false,
                rightAnswerId: 1,
                formControls: createFormCotrols()
            });
        } catch(e) {
            console.log(e)
        }
        
    }

    function changeHandler(value, controlName) {
        let formControls = { ...state.formControls };
        let control = { ...formControls[controlName] };

        control.value = value;
        control.touched = true;
        control.valid = validate(control.value, control.validation)
        formControls[controlName] = control;

        let isFormValid = validateForm(formControls);

        setState({
            ...state,
            formControls,
            isFormValid,
            })
    }

    const renderControls = () => {
        return Object.keys(state.formControls).map((key, index) => {
            const control = state.formControls[key];
            return (
                <Auxiliary key={index}>
                    <Input 
                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMessage={control.errorMessage}
                        onChange={(e) => changeHandler(e.target.value, key)}
                    />
                    { index === 0 ? <hr /> : null }
                </Auxiliary>
                
            );
        })
    }

    function selectChangeHandler(e) {
        setState({
            ...state,
            rightAnswerId: e.target.value
        })
    }

    const select = <Select 
                        label={'Выберите правильный ответ'}
                        value={state.rightAnswerId}
                        onChange={selectChangeHandler}
                        options={[
                            {text: 1, value: 1},
                            {text: 2, value: 2},
                            {text: 3, value: 3},
                            {text: 4, value: 4}
                        ]}
                    />

    return (
        <div className={classes['quiz-creator']}>
            <div>
                <h1>Создать тест</h1>
                <form onSubmit={submitHandler}>
                    {
                        renderControls(state)
                    }
                    {
                        select
                    }
                    <Button disabled={!state.isFormValid} onClick={(e) => addQuestion(e) } type="success">Добавить вопрос</Button>
                    <Button disabled={state.quiz.length === 0} onClick={(e) => createQuiz(e) } type="primary">Создать тест</Button>
                </form>
            </div>
        </div>
    )
}

export default QuizCreator;
