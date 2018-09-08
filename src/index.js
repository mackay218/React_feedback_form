import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//object to hold info from inputs
const defaultObject = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

//reducer to hold feedback 
 const feedBackInfo = (state = defaultObject, action) => {
    const newInfo = action.payload;
    if (action.type === 'ADD_FEELING') {
         return {...state, feeling: newInfo.feeling}
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        return {...state, understanding: newInfo.understanding}
    }
    else if(action.type === 'ADD_SUPPORT') {
        return {...state, support: newInfo.support}
    }
    else if(action.type === 'ADD_COMMENTS') {
        return {...state, comments: newInfo.comments}
    }
    else if(action.type === 'EMPTY_INFO') {
        return defaultObject;
    }
    return state;
 }

const storeInstance = createStore(
    
    combineReducers({feedBackInfo}),
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
