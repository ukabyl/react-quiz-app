import React, {useEffect} from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Layout from '../../hoc/layout';
import Quiz from '../../containers/quiz';
import QuizCreator from '../../containers/quiz-creator';
import QuizList from '../../containers/quiz-list';
import Auth from '../../containers/auth';
import { connect } from 'react-redux';
import Logout from '../logout';
import {autoLogin} from '../../redux/action/auth'


const App = (props) => {

    useEffect(() => {
        props.autoLogin();
    }, [])

    let routes = (
        <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/quiz/:id" component={Quiz} />
            <Route path="/" exact component={QuizList} />
            <Redirect to="/" />
        </Switch>
    );

    if (props.isAuthenticated) {
        routes = (
            <Switch>
                <Route path="/quiz-creator" component={QuizCreator} />
                <Route path="/quiz/:id" component={Quiz} />
                <Route path="/logout" component={Logout} />
                <Route path="/" exact component={QuizList} />
                <Redirect to="/" />
            </Switch>
        );
    }

    return (
        <div>
            <Layout>
                { routes }
            </Layout>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}

function mapDispachToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(App));
