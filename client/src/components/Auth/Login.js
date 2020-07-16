import React, { Component } from "react";
import { FormBtn, TextArea, Input } from "../Form";
import API from '../../utils/API'
import { signInUser } from './AuthApi'
import "./styles.css";

export default class Login extends Component {

  state = {
    email: "",
    password: "",
    error:""
  };

handleChange = event => {
  const{name, value} = event.target;
  this.setState({[name] : value})
}

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const{email, password} = this.state;

      API.getUser({
        email, password
      })
        .then(res => signInUser())
        .catch(err => console.log(err));
    }
    else {
        this.setState({error: "Please enter all required fields."})
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div class="login">Login</div>
          <div class="eula">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="col-sm-4 form">
          <Input label="Username" placeholder="Username" />
          <Input label="Password" placeholder="Password" />
          {/* <TextArea rows="2" /> */}
          <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
        </div>
      </div>
    );
  }
}
