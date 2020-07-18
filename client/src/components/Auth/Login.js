import React, { Component } from "react";
import { FormBtn, TextArea, Input } from "../Form";
import API from "../../utils/API";
import { signInUser } from "./AuthApi";
import { Redirect } from "react-router-dom";
import "./styles.css";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    isRedirect: false,
    id: "",
    error: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, error:"" });

  };

  handleFormSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const { email, password } = this.state;
      const user = { email, password };
      signInUser(user).then((result) => {
        if (result) {
          this.setState({ isRedirect: true, id: result.data.id });
        }
        else {
          this.setState({ error: "User not found", email:"", password:"" });
        }
      });
    } 
  };

  render() {
   const{error, email, password} = this.state;
    if (this.state.isRedirect) {
      return <Redirect to={`/dashboard/${this.state.id}`} />;
    }
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="login">Login</div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
        <div className="col-sm-4 form">
          <Input value={email} name="email" type="email" label="email" placeholder="Email" onChange={this.handleChange}/>
          <Input value={password} name="password" type="password" label="Password" placeholder="Password" onChange={this.handleChange}/>
          {/* <TextArea rows="2" /> */}
          <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
         <p>{error && error}</p>
        </div>
      </div>
    );
  }
}
