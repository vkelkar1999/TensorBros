import {Component, React, useState} from 'react';

import {Alert, Form, Card, Button} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

/*class moreInfo extends Component {
    constructor(props){
      super(props);
      this.state = {
        email:"",
        phoneNumber:"",
        classification:"",
      };
    } */

  function MoreInfo(props) {
      const [email, setEmail] = useState('');
      const [number, setNumber] = useState('');
      const [errors, setError] = useState('');
      const [category, setCategory] = useState('');


      // Category that is passed
      const {id} = props.match.params;
      console.log(id)

      const dates = {
        "1A" : "2021-01-15",
        "1B" : "2021-02-01",
        "1C" : "2021-03-20",
        "2" : "2021-09-01",
        "3" : "2022-01-01"
      }
    
   const handleSubmit = (event) => {
      console.log(id) 
      //event.preventDefault();
      //console.log(this.state.email)
  } ; 

   /* const validateForms()
     console.log(userData)
     axios.post('/users', userData)
     .then((res) => {console.log(res)})
     .catch((err) => console.log(err));
  } */
   
/* const validateForms = () =>{
    this.state.errors = {}
    const email = this.state.email;
    const phoneNumber = this.state.phoneNumber;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(emailRegex)){
      this.setState({ errors:"Email incorrect!"})
      console.log("setting errors")
      return false
    }
    if(phoneNumber.toString().length != 11){
      this.setState({ errors:"Phone Number incorrect!"})
      console.log(this.state.errors)
      console.log("phone number error")
      return false
    }
    return true
  }  */

  //const { errors } = this.state;
      return(
        <div className='d-flex align-items-start justify-content-center' >
          <Card>
            <Card.Body>
              <Card.Title className="text-center">More Information About you</Card.Title>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className="text-center" style={{width: "100%"}} id="email">Email</Form.Label>
                  <Form.Control type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="text-center" style={{width: "100%"}} id="phoneNumber">
                  <Form.Label>Phone Number Starting with Country Code</Form.Label>
                  <Form.Control type="number" name="phoneNumber" maxLength="10" minLength="10"value={number} onChange={e => setNumber(e.target.value)} required/>
                </Form.Group>
              <Button className="w-100" type="submit">Submit</Button>
            </Form>
            </Card.Body>
            <h1>You are in group {id} in California.</h1>
          </Card>
          <p>Based off of how the vaccine are going we expect your group to be ready by {dates[id]}</p>
        </div> 
      );
  }
  export default MoreInfo;