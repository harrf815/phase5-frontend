
import { combineReducers } from 'redux';
import authReducer from './authReducer'
import postReducer from './postReducer'
import businessReducer from './businessReducer'

export default combineReducers({
    auth: authReducer,
    post: postReducer, 
    business: businessReducer,
})