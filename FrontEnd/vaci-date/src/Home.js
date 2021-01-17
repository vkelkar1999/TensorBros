import { Component, React, useState } from 'react';
import {Button, Form, Card} from 'react-bootstrap';


const rankings = ['1A', '1B', '1C', '2', '3']


class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age:"",
        house:"",
        job:"",
      };
    }
  
    nextPath(path) {
      this.props.history.push(path);
    }

    handleChange = (event) => {
      console.log(event.target.value)
      this.setState({
        [event.target.name]:event.target.value
      })
    };

    handleSubmit = (event) => { 
      event.preventDefault();
      const userData = { 
        age: this.state.age,
        job: this.state.job,
        house: this.state.house
    };
      
    };
    
    render() {
      return (  
        <div className="w-100">
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Information About You</h2>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group id="Age">
                            <Form.Label>Age</Form.Label>
                                <Form.Check
                                    value="1B"
                                    name="age"
                                    label="65+"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    value="1C"
                                    name="age"
                                    label="55 - 64"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                                <Form.Check
                                    value="2"
                                    name="age"
                                    label="18 - 54"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                                <Form.Check
                                    value="3"
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
                                    value="1A"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Health Care Worker"
                                    value="1B"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Commercial and Service Jobs"
                                    value="1C"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                                <Form.Check
                                    label="Working from Home"
                                    value="3"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                        </Form.Group>
                        <Form.Group id="House">
                            <Form.Label>Housing Situation</Form.Label>
                                <Form.Check
                                    label="Nursing Home"
                                    value="1A"
                                    name="house"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Large Community"
                                    value="1C"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 

                                <Form.Check
                                    label="Private Residence"
                                    value="3"
                                    name="job"
                                    type="radio"
                                    onChange={this.handleChange}
                                /> 
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        <Form onSubmit={this.handleSubmit}>
        <h2>Age</h2>
          <div className="radio-buttons">
            65+
            <input
              value="1B"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            55-64
            <input
              value="1C"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            18-54
            <input
              value="2"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            Under 18
            <input
              value="3"
              name="age"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 
        <h2>Occupation</h2> 
            <div className="radio-buttons">
            Emergency Medical Services
            <input
              value="1A"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            Health Care Worker
            <input
              value="1B"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            Commercial and Service Jobs
            <input
              value="1C"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            Working from Home
            <input
              value="3"
              name="job"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 
        <h2>Housing Situation</h2>
            <div className="radio-buttons">
            Nursing Home
            <input
              value="1A"
              name="house"
              type="radio"
              onChange={this.handleChange}
            />
            Large Community
            <input
              value="1C"
              name="house"
              type="radio"
              onChange={this.handleChange}
            />
            Private Residence
            <input
              value="3"
              name="house"
              type="radio"
              onChange={this.handleChange}
            />
            </div> 

          <Button type="submit">Do the thing</Button>
        </Form>

        <Button onClick={() => this.nextPath('./moreInfo') }>
        change path 
      </Button>
        </div>
      );
    }
  }


export default Home;