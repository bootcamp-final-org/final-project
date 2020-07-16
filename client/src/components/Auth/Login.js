import React, { Component } from "react";
import { FormBtn, TextArea, Input } from "../Form";
import API from "../../utils/API";
import { signInUser } from "./AuthApi";
import { Redirect } from "react-router-dom";
import "./styles.css";

export default class Login extends Component {
  state = {
    email: "",
    firstName: "",
    password: "",
    isRedirect: false,
    id: "",
    error: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const { email, password, id, firstName } = this.state;
      const user = { email, password, id, firstName };
      signInUser(user).then((result) => {
        console.log(user);
        if (result) {
          this.setState({ isRedirect: true, id: result.data.data._id });
        }
      });
    } else {
      this.setState({ error: "Please enter all required fields." });
    }
  };

  render() {
    console.log(this.state.error);
    if (this.state.isRedirect) {
      return <Redirect to={`/current`} />;
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
          <Input name="email" type="email" label="email" placeholder="Email" onChange={this.handleChange}/>
          <Input name="password" type="password" label="Password" placeholder="Password" onChange={this.handleChange}/>
          {/* <TextArea rows="2" /> */}
          <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
        </div>
      </div>
    );
  }
}
