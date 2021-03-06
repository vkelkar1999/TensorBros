import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';
import { Container } from "react-bootstrap";
import moreInfo from "./moreInfo"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import axios from 'axios';
import maps from "./Maps"
import MoreInfo from './moreInfo'
  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  const rankings = ['1A', '1B', '1C', '2', '3']
  //Local testing
axios.defaults.baseURL = 'https://us-central1-lucky-outpost-301600.cloudfunctions.net/api'
  class App extends Component {
    
    
    render() {
      const user = {name:'Tania', LoggedIn:true}
      return (  
        <Container fluid={true} >
          <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/MoreInfo/:id' component={MoreInfo}/>
                <Route path='/map' component={maps}/>
            </Switch>
          </Router>
        </Container>
      );
    }
  }

export default App;
