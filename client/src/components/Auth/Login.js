import React, { Component } from 'react'
import { FormBtn, TextArea, Input } from '../Form'

export default class Login extends Component {
    render() {
        return (
            <div>
                <Input label="Username" placeholder="Username"  />
                <Input label="Password" placeholder="Password"  />
                {/* <TextArea rows="2" /> */}
                <FormBtn>Login</FormBtn>

            </div>
        )
    }
}
