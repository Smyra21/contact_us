import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
          email: "",
          name: "",
          phone: "",
          password:"",
          address:""

        };
      }
    
      handleEmailChange = e => {
        //   var regex="^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@*$";
        //   console.log(regex)
        // if(e.target.value.match(regex) != null){
        //     this.setState({email: e.target.value});
        // }
        this.setState({ email: e.target.value });
      };
    
      handleNameChange = e => {
        if(e.target.value.match("^[a-zA-Z ]*$") != null){
            this.setState({name: e.target.value});
        }
        // this.setState({ name: e.target.value });
      };
      handlePhoneChange = e => {
        if(e.target.value.match("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$") != null){
            this.setState({phone: e.target.value});
        }
        // this.setState({ phone: e.target.value });
      };
      handlePasswordChange = e => {
        // if(e.target.value.match("^[a-zA-Z]\w{3,14}$") != null){
        //     this.setState({password: e.target.value});
        // }
        this.setState({ password: e.target.value });
      };
    
      handleAddressChange = e => {
        this.setState({ address: e.target.value });
      };
      onSubmit = () => {
        this.props.submitDispatch(this.state);
        this.setState(
          {
          name: "",
          email: "",
          password:"",
          phone: "",
          address:""
        });
      }


    render() {
        const { name, email, password } = this.state;
        const enabled =
        name.length>0 &&
        email.length > 0 &&
        password.length > 0;
        return (
            <div className="container-fluid">
                <br />
            <div className="row">
                <div className="col-md-4"></div>
            <div className="col-md-4" style={{backgroundColor:"cyan"}} >
                <br />
            <h1><strong>Fill in the form</strong></h1>
            <hr />
            <form>
            <label>
               <strong> Name:</strong>
                </label>
                <br />
                <input
                  type="text"
                  required
                  value={this.state.name}
                  placeholder="Enter your name"
                  onChange={this.handleNameChange}
                />
              
              <hr />
              <label>
                <strong>Email-id:</strong>
                <br />
                <input
                  type="text"
                //   pattern="^[^\s]+(\s+[^\s]+)*$"
                  required     
                  placeholder="Enter your email-id"              
                  value={this.state.email}
                  onChange={this.handleEmailChange} 
                />
              </label>
              <hr />
              <label>
                <strong>Password:</strong>
                <br />
                <input
                  type="password"
                  required
                  value={this.state.password}
                  placeholder="Enter your password"
                  onChange={this.handlePasswordChange}
                />
              </label>
              <hr />
              <label>
               <strong> Phone:</strong>
                <br />
                <input
                  type="text"
                  value={this.state.phone}
                  placeholder="Enter your phone number"
                  onChange={this.handlePhoneChange}
                />
              </label>
              <hr />
              <label>
               <strong> Address:</strong>
                <br />
                <input
                  type="text"
                  value={this.state.address}
                  placeholder="Enter your address"
                  onChange={this.handleAddressChange}
                />
              </label>
              <hr />
            </form>
            <Link to="/submitted_data"><button disabled={!enabled} onClick={() => this.onSubmit()}>Submit</button></Link>            
            <hr />
          </div>
          <div className="col-md-4"></div>
          </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name:state.name,
        emailId:state.emailId,
        password:state.password,
        phone:state.phone,
        address:state.address,
        history:state.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitDispatch: (payload) => dispatch({type:'SUBMIT', payload: payload}),
        onDelItem: (id) => dispatch({type:'DEL_ITEM', key:id })
       }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Form);
