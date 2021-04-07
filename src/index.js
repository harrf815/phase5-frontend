import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)//, applyMiddleWare(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.querySelector('#root')
)