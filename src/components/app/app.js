import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Layout from '../../hoc/layout';
import Quiz from '../../containers/quiz';
import QuizCreator from '../../components/quiz-creator';
import QuizList from '../../components/quiz-list';
import Auth from '../../components/auth';


const App = () => {
    return (
        <div>
            <Layout>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/quiz-creator" component={QuizCreator} />
                    <Route path="/quiz/:id" component={Quiz} />
                    <Route path="/" component={QuizList} />
                </Switch>
            </Layout>
        </div>
    )
}

export default App;