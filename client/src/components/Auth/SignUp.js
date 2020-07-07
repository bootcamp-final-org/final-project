import React, { Component } from 'react'
import { FormBtn, TextArea, Input } from '../Form'
import API from '../../utils/API'

export default class SignUp extends Component {

    state = {
        firstName: "",
        lastName: "",
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
        if (this.state.firstName && this.state.lastName) {
          const{firstName, lastName, email, password} = this.state;

          API.saveUser({
            firstName, lastName, email, password
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
        else {
            this.setState({error: "Please enter all required fields."})
        }
      };



    render() {
      console.log(this.state.error)
        return (
            <div>
                <Input name="firstName" type="text" placeholder="First Name" onChange={this.handleChange} />
                <Input name="lastName" type="text" placeholder="Last Name" onChange={this.handleChange}  />
                <Input name="email" type="email" placeholder="Email" onChange={this.handleChange}  />
                <Input name="password" type="password" placeholder="Password" onChange={this.handleChange}  />
                {/* <TextArea rows="2" /> */}
                <FormBtn onClick={this.handleFormSubmit}>Login</FormBtn>
                <p>{this.state.error}</p>

            </div>
        )
    }
}
