import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';
import moreInfo from "./moreInfo"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';

  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  const rankings = ['1A', '1B', '1C', '2', '3']

  class App extends Component {

    
    render() {
      return (  
        <div className='d-flex align-items-center justify-content-center' style = {{minHeight: "100vh"}}>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/moreInfo' component={moreInfo}/>
            </Switch>
          </Router>
        </div>
      );
    }
  }

export default App;
