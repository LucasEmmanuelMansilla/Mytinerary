import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer';

const myStore = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render( 
    <Provider store={myStore}>
        <App / > 
    </Provider>,
    document.getElementById('root')
);