import {Component, React, useState} from 'react';
<<<<<<< Updated upstream
import {Form, Card, Button} from 'react-bootstrap';

=======
import {Alert, Form, Card, Button} from 'react-bootstrap';
import axios from 'axios';
>>>>>>> Stashed changes

/*class moreInfo extends Component {
    constructor(props){
      super(props);
      this.state = {
        email:"",
        phoneNumber:"",
<<<<<<< Updated upstream
        classification:"",
      };
    } */

  function MoreInfo(props) {
      const [email, setEmail] = useState('');
      const [number, setNumber] = useState('');
=======
        errors: {}
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.UI.errors) {
        this.setState({ errors: nextProps.UI.errors });
      }
    }
    handleChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }
>>>>>>> Stashed changes

      const {id} = props.match.params;
      console.log(id)

   const handleSubmit = (event) => { 
      event.preventDefault();
<<<<<<< Updated upstream
      console.log(this.state.email)
  } 
   
    
=======
      const userData = { 
        email:this.state.email,
        phoneNumber:this.state.phoneNumber
    };
    this.validateForms()
    // console.log(userData)
    // axios.post('/users', userData)
    // .then((res) => {console.log(res)})
    // .catch((err) => console.log(err));
  }
   
  validateForms = () =>{
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
  }
    render(){
      const { errors } = this.state;
>>>>>>> Stashed changes
      return(
        <div>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">More Information About you</Card.Title>
<<<<<<< Updated upstream
            <Form onSubmit={handleSubmit}>
=======
              {errors.general && <Alert variant="danger">{errors.general}</Alert>}
              <Form onSubmit={this.handleSubmit}>
>>>>>>> Stashed changes
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
          </Card>

          <div>
          
          </div>
        </div>
      );
    }
   
  export default MoreInfo;