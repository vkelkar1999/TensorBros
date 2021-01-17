import {Component, React} from 'react';




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
          Hello
        </div>
      )
    }
  }
   
  export default moreInfo;