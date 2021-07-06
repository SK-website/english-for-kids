import './styles.scss';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger'
// import rootReducer from './reducers/index';

// console.log('Hello world');

import { App } from './app';

window.onload = () => {
  new App().start();
};
