import quizReducer from './quiz'
import {combineReducers} from 'redux'
export default combineReducers({
    quiz:quizReducer,
    create:createReducer,
    auth:authReducer
})