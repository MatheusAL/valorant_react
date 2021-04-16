import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage/';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={LoginPage} />
  </BrowserRouter>,
  
  document.getElementById('root'),
);
