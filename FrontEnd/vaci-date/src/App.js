import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';
import moreInfo from "./moreInfo"; 
import { Link } from "react-router-dom";

  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  const rankings = ['1A', '1B', '1C', '2', '3']

  function NavigationDemo() {

    return (
     <div>
     <Link  to={{pathname: moreInfo}}>NavigateNow</Link>
     </div>
    );
  }

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age:"",
        house:"",
        job:"",
      };
    }
  
    handleChange = (event) => {
      console.log('I was triggered during render')
      this.setState({
        [event.target.name]:event.target.value
      })
    };

    handleSubmit = (event) => { 
      event.preventDefault();
      const userData = { 
        age: this.state.age,
        job: this.state.job,
        house: this.state.house
    };
      
    };
    
    render() {
      return (  
        <div>
        <form onSubmit={this.handleSubmit}>
          <div class="mt-4">
          <div className="radio-buttons">
            65+
            <input
              value="1B"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            55-64
            <input
              value="1C"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            18-54
            <input
              value="2"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            Under 18
            <input
              value="3"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 
            <div className="radio-buttons">
            Emergency Medical Services
            <input
              value="1A"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            Health Care Worker
            <input
              value="1B"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            Commercial and Service Jobs
            <input
              value="1C"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            Working from Home
            <input
              value="3"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 
            <div className="radio-buttons">
            Nursing Home
            <input
              value="1A"
              name="house"
              type="radio"
              onChange={this.handleChange}
            />
            Large Community
            <input
              value="1C"
              name="house"
              type="radio"
              onChange={this.handleChange}
            />
            Private Residence
            <input
              value="3"
              name="house"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 
          </div>
          <button type="submit">Do the thing</button>
        </form>
        </div>
      );
    }
  }

export default App;
