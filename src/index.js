import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux'
// import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App style={{minHeight: "100px"}}/> 
    </Provider>,
    document.querySelector('#root')
)