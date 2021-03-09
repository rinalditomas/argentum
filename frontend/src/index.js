import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './container/main'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";



ReactDOM.render(
  <Provider store ={store}>
  <Router>
    <Main />
  </Router>
  </Provider>,
  document.getElementById('root')
);

