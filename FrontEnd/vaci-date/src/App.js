import logo from './logo.svg';
import './App.css';
import { Component, React, useState } from 'react';


function App() {

  /*const handleChange = event => {
    this.setState({ username: event.target.value });
  }; */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function App() {
  return (
    <div className="App" >
      <div className="w-full max-w-md bg-gray-800" >
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="name" className="text-sm block font-bold  pb-2">Name</label>
            <input type="name" name="name" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="..."/>
          </div>
          <div  className="px-4 pb-4">
            <label htmlFor="age" className="text-sm block font-bold pb-2">Age</label>
            <input type="age" name="age" id="age" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="..."/>
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="height" className="text-sm block font-bold  pb-2">Height</label>
            <input type="height" name="height" id="height" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="..."/>
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="weight" className="text-sm block font-bold  pb-2">Weight</label>
            <input type="weight" name="weight" id="weight" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="..."/>
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="county" className="text-sm block font-bold  pb-2">County</label>
            <input type="county" name="county" id="county" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="..."/>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >Submit</button>
          </div>
        </form>
      </div>
  </div>
  );
}

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
