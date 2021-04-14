
import { combineReducers } from 'redux';
import authReducer from './authReducer'
import postReducer from './postReducer'
import businessReducer from './businessReducer'
import scheduleReducer from './scheduleReducer'

export default combineReducers({
    auth: authReducer,
    post: postReducer, 
    business: businessReducer,
    schedule: scheduleReducer,
})