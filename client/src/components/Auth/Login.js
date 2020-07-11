import React, { Component } from "react";
import { FormBtn, TextArea, Input } from "../Form";
import "./styles.css";

export default class Login extends Component {
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
          <FormBtn>Login</FormBtn>
        </div>
      </div>
    );
  }
}
