import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './components/login.js'
import reportWebVitals from './components/reportWebVitals.js';
import Router from './components/Route.js';
import ControlPanel from './components/ControlPanel.js'

document.getElementById('root').className+="root";
ReactDOM.render(
  <Router /> 
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


