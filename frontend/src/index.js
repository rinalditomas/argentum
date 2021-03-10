import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router ,Route} from "react-router-dom";
import './index.css';
import Main from './container/main'

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

