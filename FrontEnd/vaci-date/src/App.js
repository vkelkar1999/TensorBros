import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';
import { Container } from "react-bootstrap";
import moreInfo from "./moreInfo"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import axios from 'axios';
import {UserContext, UserProvider} from './UserContext'
  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  const rankings = ['1A', '1B', '1C', '2', '3']
  //Local testing
axios.defaults.baseURL = 'http://localhost:5000/lucky-outpost-301600/us-central1/api'
  class App extends Component {
    
    
    render() {
      const user = {name:'Tania', LoggedIn:true}
      return (  
        <Container className='d-flex align-items-start justify-content-center' style = {{minHeight: "100vh"}}>
          <Router>
            <Switch>
              <UserProvider>
                <Route exact path='/' component={Home}/>
                <Route path='/moreInfo/:id' component={moreInfo}/>
              </UserProvider>
            </Switch>
          </Router>
        </Container>
      );
    }
  }

export default App;
