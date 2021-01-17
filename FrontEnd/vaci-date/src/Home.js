import { Component, React, useState, useContext } from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import {Link, StaticRouter} from 'react-router-dom';
import { useUser } from './UserContext';


const rankings = ['1A', '1B', '1C', '2', '3']



class Home extends Component {
  static contextType = useUser
    constructor(props) {
      super(props);
      this.state = {
        age:"",
        house:"",
        job:"",
        low:"test"
      };
    }
    componentDidMount(){
      const user = this.context
      console.log(user)
    }
    nextPath(path) {
      this.props.history.push(path);
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]:event.target.value }, () => {                              
        //callback
        console.log(this.state.low) // myname
      });
      
    };

    handleSubmit = (event) => { 
      event.preventDefault();
      const userData = { 
        age: this.state.age,
        job: this.state.job,
        house: this.state.house
    }
    var lowest = "";
    console.log(lowest)
    if(parseInt(userData.age) < parseInt(userData.job) )
    {
        lowest = userData.age
    }
    else
    {
      lowest = userData.job
    }
    if(parseInt(lowest) > parseInt(userData.house) )
    {
        lowest = userData.house
    }


    if(lowest == "1")
    {
      lowest = "1A"
    }
    else if(lowest == "2")
    {
      lowest = "1B"
    }
    else if(lowest == "3")
    {
      lowest = "1C"
    }
    else if(lowest == "4")
    {
      lowest = "2"
    }
    else
    {
      lowest = "3"
    }
    this.setState({ low:lowest }, () => {                              
        //callback
        console.log(this.state.low) // myname
      }); 
    }
    
    render() {
      const {currentUser, setCurrentUser} = this.context
      return (  
        <div className="w-100">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Information About You</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group id="Age">
                            <Form.Label>Age</Form.Label>
                                <Form.Check
                                    value="2"
                                    name="age"
                                    label="65+"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    value="3"
                                    name="age"
                                    label="55 - 64"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                                <Form.Check
                                    value="4"
                                    name="age"
                                    label="18 - 54"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                                <Form.Check
                                    value="5"
                                    name="age"
                                    label="Under 18"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                        </Form.Group>
                    <Form.Group id="Job">
                            <Form.Label>Age</Form.Label>
                                <Form.Check
                                    label="Emergency Medical Services"
                                    value="1"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Health Care Worker"
                                    value="2"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Commercial and Service Jobs"
                                    value="3"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                                <Form.Check
                                    label="Working from Home"
                                    value="5"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                        </Form.Group>
                        <Form.Group id="House">
                            <Form.Label>Housing Situation</Form.Label>
                                <Form.Check
                                    label="Nursing Home"
                                    value="1"
                                    name="house"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Large Community"
                                    value="3"
                                    name="house"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Private Residence"
                                    value="5"
                                    name="house"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                        </Form.Group>
                        <Button type="submit">Do the thing</Button>
                    </Form>
                </Card.Body>
            </Card>
        
        <Link
        to={
        `MoreInfo/${this.state.low}`
        }> moreInfo </Link>
        
        </div>
      );
    }
  }


export default Home;