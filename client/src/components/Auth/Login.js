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
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const { email, password, id } = this.state;
      const user = { email, password };
      signInUser(user).then((result) => {
        console.log("result" + result);
        if (result.data) {
          this.setState({ isRedirect: true, id: result.data._id });
        }
      });
    } else {
      this.setState({ error: "Please enter all required fields." });
    }
  };

  render() {
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
          <Input type="email" label="Username" placeholder="Username" />
          <Input type="password" label="Password" placeholder="Password" />
          {/* <TextArea rows="2" /> */}
          <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
        </div>
      </div>
    );
  }
}
