import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';

import './commons/styles/index.module.css';
import App from './components/app';
import reducers from './reducers';

const createStoreWithPromiseMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithPromiseMiddleware(reducers)}>
        <App/>
    </Provider>,
    document.getElementById('root'),
);
