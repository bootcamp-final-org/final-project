import React, { Component } from 'react'
import { FormBtn, TextArea, Input } from '../Form'
import API from '../../utils/API'
import { signUpUser } from './AuthApi'
import { Redirect } from "react-router-dom"


export default class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        isRedirect: false,
        error:""
      };

    handleChange = event => {
      const{name, value} = event.target;
      this.setState({[name] : value})
    }

    handleFormSubmit = event => {
      console.log(this.state)
        event.preventDefault();
        if (this.state.firstName && this.state.lastName) {
          const{firstName, lastName, email, password} = this.state;
          const user = {firstName, lastName, email, password};
          signUpUser(user).then(result => {
            if(result.data) {
              this.setState({ isRedirect: true})
            }
          })
        }
        else {
            this.setState({error: "Please enter all required fields."})
        }
      };


    render() {
      console.log(this.state.error)
      if(this.state.isRedirect) {
        return <Redirect to="/"/>
      }
        return (
            <div>
              <div className="container-home">
              <div className="row">
               <div className="col-lg-4">
        <div className="card">
        <div className="card-body">
          <div className="login">
            <h2>Sign Up</h2></div>
          <div className="eula">
            By logging in you agree to the ridiculously long terms that you
            didn't bother to read
          </div>
        </div>
              <div className="col-lg-4 form">
                <Input name="firstName" type="text" placeholder="First Name" onChange={this.handleChange} />
                <Input name="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}  />
                <Input name="email" type="email" placeholder="Email" onChange={this.handleChange}  />
                <Input name="password" type="password" placeholder="Password" onChange={this.handleChange}  />
                {/* <TextArea rows="2" /> */}
                <FormBtn onClick={this.handleFormSubmit}>Sign Up</FormBtn>
                <p>{this.state.error}</p>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
