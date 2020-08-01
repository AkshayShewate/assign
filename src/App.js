import React from 'react';

import { Router } from 'react-router-dom';

import './App.css';
import Routes from './routes/routes'
import history from './services/history'


export default class App extends React.Component{
  constructor(props){
    super(props);
  }
render(){
  return (
    
    <Router history={history}>
       <Routes />
    </Router>

  );
}
}