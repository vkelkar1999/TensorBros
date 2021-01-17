import {Component, React} from 'react';
import {Form, Card, Button} from 'react-bootstrap';



class moreInfo extends Component {
    constructor(props){
      super(props);
      this.state = {
        email:"",
        phoneNumber:"",
      };
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]:event.target.value
      })
    }

    handleSubmit = (event) => { 
      event.preventDefault();
      const userData = { 
        email:this.state.email,
        phoneNumber:this.state.phoneNumber
    };
    console.log(userData)
  }
   
    render(){
      return(
        <div>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">More Information About you</Card.Title>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className="text-center" style={{width: "100%"}} id="email">Email</Form.Label>
                  <Form.Control type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                </Form.Group>
                <Form.Group className="text-center" style={{width: "100%"}} id="phoneNumber">
                  <Form.Label>Phone Number Starting with Country Code</Form.Label>
                  <Form.Control type="number" name="phoneNumber" maxLength="10" minLength="10"value={this.state.phoneNumber}  onChange={this.handleChange} required/>
                </Form.Group>
              <Button className="w-100" type="submit">Submit</Button>
            </Form>
            </Card.Body>
          </Card>
        </div>
      )
    }
  }
   
  export default moreInfo;