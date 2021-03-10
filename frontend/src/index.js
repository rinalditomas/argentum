import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import './index.css';

import Main from './container/main'
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

