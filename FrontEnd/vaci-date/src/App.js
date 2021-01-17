import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';



  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

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
      this.setState({
        [event.target.name]:event.target.value
      })
      // const { name, value } = e.target;
  
      // this.setState({
      //   [name]: value
      // });
    };
  
    render() {
      return (
        <div className="radio-buttons">
          Windows
          <input
            value="1"
            name="age"
            type="radio"
            onChange={this.handleChange}
          />
          Mac
          <input
            value="2"
            name="age"
            type="radio"
            onChange={this.handleChange}
          />
          Linux
          <input
            value="3"
            name="age"
            type="radio"
            onChange={this.handleChange}
          />
          <div>
          Selected option is : {this.state.age}
        </div>
        </div>
      );
    }
  }

export default App;
