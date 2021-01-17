import {Component, React, useState} from 'react';
import {Form, Card, Button} from 'react-bootstrap';


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

      const {id} = props.match.params;
      console.log(id)

   const handleSubmit = (event) => { 
      event.preventDefault();
      console.log(this.state.email)
  } 
   
    
      return(
        <div>
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
          </Card>

          <div>
          
          </div>
        </div>
      );
    }
   
  export default MoreInfo;