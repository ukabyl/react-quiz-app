import React, { useState } from 'react'
import classes from './auth.module.css';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {auth} from '../../redux/action/auth'
import {connect} from 'react-redux';

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const Auth = (props) => {

    const [state, setState] = useState({
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                valid: false,
                errorMessage: 'Введите корректный email',
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                valid: false,
                errorMessage: 'Введите корректный пароль',
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    })

    function isValid(value, validation) {
        if ( !validation ) {
            return true;
        }
        
        let valid = true;

        if ( validation.required ) {
            valid = value.trim() !== '' ? true : false;
        }
        if ( validation.email ) {
            valid = validateEmail(value);
        }
        if( validation.minLength ) {
            valid = value && value.indexOf(' ') === -1 && value.length >= 6;
        }

        return valid;
    }

    const changeHandler = (e, controlName) => {
        let formControls = { ...state.formControls };
        let control = { ...formControls[controlName] };
        
        control.value = e.target.value;
        control.valid = isValid(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach((key) => {
            isFormValid = formControls[key].valid && isFormValid;
        })

        setState({ isFormValid, formControls })
    }
    
    function inputTouchedHandler(controlName) {
        let formControls = { ...state.formControls };
        let control = { ...formControls[controlName] };
        control.touched = true;
        formControls[controlName] = control;

        let isFormValid = true;
        
        Object.keys(formControls).forEach((key) => {
            isFormValid = formControls[key].valid && isFormValid;
        })

        setState({ isFormValid, formControls })
    }

    const renderInputs = () => {
        return Object.keys(state.formControls).map((key, index) => {
            const control = state.formControls[key];
            return (
                <Input  
                    key={control.type + index}
                    label={control.label}
                    valid={control.valid}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    value={control.value}
                    shouldValidate={!!control.validation}
                    onChange={(event) => changeHandler(event, key)}
                    onBlur={(event) => inputTouchedHandler(key)}
                />
            );
        })
    }

    const loginHandler = (e) => {
        props.auth(state.formControls.email.value, state.formControls.password.value, true)

    }

    const registerHandler = async (e) => {
        props.auth(state.formControls.email.value, state.formControls.password.value, false)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className={classes.auth}>
            <div>
                <h1>Авторизация</h1>
                <form onSubmit={submitHandler}>
                    { renderInputs() }
                    <Button disabled={!state.isFormValid} onClick={loginHandler} type={'success'}>Войти</Button>
                    <Button disabled={!state.isFormValid} onClick={registerHandler} type={'primary'}>Регистрация</Button>
                </form>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Auth);
