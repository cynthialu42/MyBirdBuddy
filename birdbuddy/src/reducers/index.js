import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuizReducer from './QuizReducer';

const rootReducer = combineReducers({
    results: QuizReducer,
    form: formReducer
});

export default rootReducer;