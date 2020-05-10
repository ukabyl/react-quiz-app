import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-3d8cb.firebaseio.com'
})