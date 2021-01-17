import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';



  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    handleChange = e => {
      const { name, value } = e.target;
  
      this.setState({
        [name]: value
      });
    };
  
    render() {
      return (
        <div className="radio-buttons">
          Windows
          <input
            id="windows"
            value="windows"
            name="platform"
            type="radio"
            onChange={this.handleChange}
          />
          Mac
          <input
            id="mac"
            value="mac"
            name="platform"
            type="radio"
            onChange={this.handleChange}
          />
          Linux
          <input
            id="linux"
            value="linux"
            name="platform"
            type="radio"
            onChange={this.handleChange}
          />
          <div>
          Selected option is : {this.state.platform}
        </div>
        </div>
      );
    }
  }

export default App;
