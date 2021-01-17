import {Component, React} from 'react';
import {Form} from 'react-bootstrap';



class moreInfo extends Component {
    constructor(props){
      super(props);
      this.state = {
        email:"",
        phoneNumber:"",
      };
    }

    handleChange(event){
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
  }
   
    render(){
      return(
        <div>
          <Form>

          </Form>
        </div>
      )
    }
  }
   
  export default moreInfo;