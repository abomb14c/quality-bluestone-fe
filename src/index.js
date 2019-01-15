import './index.css';
import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../src/reducers';


const devTools = 
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

render(
  <Provider store={ store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

