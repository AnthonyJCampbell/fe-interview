import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import myReducer from './store/reducers/reducers';

import './index.scss';
import App from './App';

const rootReducer = combineReducers({
    // Future-proofing: Add other reducers below
    reducer: myReducer
})

export const store = createStore(
    rootReducer, {},
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root') || document.createElement('div') // for testing purposes
);
