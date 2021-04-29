import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import LoginPage from './pages/LoginPage/';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact component={LoginPage} />
    <Route path="/home" component={Home} />
  </BrowserRouter>,
  
  document.getElementById('root'),
);
