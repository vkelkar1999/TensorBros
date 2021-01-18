import { Component, React, useState, useContext } from 'react';
import {Button, Form, Card} from 'react-bootstrap';
import {Link, StaticRouter} from 'react-router-dom';


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age:"",
        house:"",
        job:"",
        low:"",
        result: true
      };
    }
    handleChange = (event) => {
      this.setState({ [event.target.name]:event.target.value }, () => {                              
        //callback
        console.log(this.state.low)
      });
      
    };



    handleSubmit = async (event) => { 
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


    if(lowest === "1")
    {
      lowest = "1A"
    }
    else if(lowest === "2")
    {
      lowest = "1B"
    }
    else if(lowest === "3")
    {
      lowest = "1C"
    }
    else if(lowest === "4")
    {
      lowest = "2"
    }
    else
    {
      lowest = "3"
    }
    
    this.setState({ low:lowest }, () => {                              
        //callback
        console.log(this.state.low) 
      }); 

      await new Promise(r => setTimeout(r, 500));

      if(this.state.low === "1A")
      {
        alert("You are eligible to take the vaccine! Please click the link.")
        this.setState({ result:false }, () => {                              
          //callback
          console.log(this.state.result) 
        }); 

      }
      else
      {
        alert("You are ineligible to take the vaccine! Please go to more Info.")
      }

    }

    render() {
      return (  
        <div className="d-flex align-items-start justify-content-center"  style = {{minHeight: "100vh"}}>
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
            { this.state.result ? <InEligible message={this.state.low} />: <Eligible /> }
        </div>
      );
    }
  }

  class InEligible extends Component{
    render(){
    return(
    <Link
        to={
        `MoreInfo`
        }> MoreInfo </Link>
    )
  }
}

  const Eligible = () => (
    <Link
        to={
        `Map`
        }> Eligible </Link>
  )


export default Home;