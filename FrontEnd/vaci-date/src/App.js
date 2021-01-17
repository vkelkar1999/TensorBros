import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';



  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "React"
    };
    
    this.formSubmit = this.formSubmit.bind(this);
  }

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
    event.preventDefault();
    this.setState({
      form: [this.state.age, this.state.house, this.state.job]
    });
    
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div onChange={this.setAge.bind(this)}>
          <label>Age</label>
          <div></div>
            <input
              type="radio"
              value="1"
              onChange={this.setAge}
            />
            65+ 
          <label>
            <input
              type="radio"
              value="2"
              onChange={this.setAge}
            />
            55+ 
          </label>
          <label>
            <input
              type="radio"
              value="3"
              onChange={this.setAge}
            />
            18+
          </label>
          <label>
            <input
              type="radio"
              value="4"
              onChange={this.setAge}
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
              onChange={this.setHousing}
            />
            Nursing Home 
          <label>
            <input
              type="radio"
              value="2"
              onChange={this.setHousing}
            />
            Communal Housing 
          </label>
          <label>
            <input
              type="radio"
              value="3"
              onChange={this.setHousing}
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
              onChange={this.setJob}
            />
            Emergency Medical Provider
          <label>
            <input
              type="radio"
              value="2"
              onChange={this.setJob}
            />
            Health Care Worker
          </label>
          <label>
            <input
              type="radio"
              value="3"
              onChange={this.setJob}
            />
            Services and Commercial Work
          </label>
          <label>
            <input
              type="radio"
              value="4"
              onChange={this.setJob}
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
