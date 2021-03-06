import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from '../redux/reducers'
import { App } from '../components'


const middleware = [thunk]; 

const store = createStore(
  rootReducer,
  // //this is for checking states in store in redux in browser pretty useful..
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware) 
);

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
          <Route path='/' component={App} />
      </Router>
    </Provider>
  );
};

export default Root
