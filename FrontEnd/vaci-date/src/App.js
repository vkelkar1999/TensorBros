import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';



  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

class App extends Component {

  setAge(event) {
    this.setState({
      age: event.target.value
    });
  }
  setHousing(event) {
    this.setState({
      house: event.target.value
    });
  }
  setJob(event) {
    this.setState({
      job: event.target.value
    });
  }

  formSubmit(event) {
    
    
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div onChange={this.setAge.bind(this)}>
          <label>Age</label>
          <div></div>
            <input
              type="radio"
              value="2"
            />
            65+ 
          <label>
            <input
              type="radio"
              value="3"
            />
            55+ 
          </label>
          <label>
            <input
              type="radio"
              value="4"
            />
            18+
          </label>
          <label>
            <input
              type="radio"
              value="4"
            />
            Child
          </label>
        </div>
        <div></div>
        <div onChange={this.setHousing.bind(this)}>
          <label>Current Housing</label>
          <div></div>
            <input
              type="radio"
              value="1"
            />
            Nursing Home 
          <label>
            <input
              type="radio"
              value="3"
            />
            Communal Housing 
          </label>
          <label>
            <input
              type="radio"
              value="4"
            />
            Private Residence
          </label>
        </div>
        <div onChange={this.setJob.bind(this)}>
          <label>Occupation</label>
          <div></div>
            <input
              type="radio"
              value="1"
            />
            Emergency Medical Provider
          <label>
            <input
              type="radio"
              value="2"
            />
            Health Care Worker
          </label>
          <label>
            <input
              type="radio"
              value="3"
            />
            Services and Commercial Work
          </label>
          <label>
            <input
              type="radio"
              value="4"
            />
            Non-contact Job
          </label>
        </div>
        <div></div>
        <button className="btn btn-default" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
