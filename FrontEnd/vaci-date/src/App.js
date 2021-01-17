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
      console.log('I was triggered during render')
      this.setState({
        [event.target.name]:event.target.value
      })
    };

    handleSubmit = (event) => { 
      event.preventDefault();
      const userData = { 
        email: this.state.email,
        house: this.state.house,
        job: this.state.job
    };
      console.log(this.state)
    };
    
    render() {
      return (  
        <div>
        <form onSubmit={this.handleSubmit}>
          <div class="mt-4">
          <div className="radio-buttons">
            65+
            <input
              value="1"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            55-64
            <input
              value="2"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            18-54
            <input
              value="3"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            Under 18
            <input
              value="4"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 
            <div>
            Selected option is : {this.state.age}
            </div>
          </div>
          <button type="submit">Do the thing</button>
        </form>
        </div>
      );
    }
  }

export default App;
