import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';


function App() {

  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="App">
      <header className="App-header">

         <label htmlFor="username">Enter Name</label>
         <input value={name} onInput={e => setName(e.target.value)}/>
         <label htmlFor="useremail">Enter Email</label>
         <input value={email} onInput={e => setEmail(e.target.value)}/>
        
      </header>
    </div>
  );
}

export default App;
