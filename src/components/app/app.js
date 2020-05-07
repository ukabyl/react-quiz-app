import React from 'react'

import Layout from '../../hoc/layout';
import Quiz from '../../containers/quiz';


const App = () => {
    return (
        <div>
            <Layout>
                <Quiz />
            </Layout>
        </div>
    )
}

export default App;
