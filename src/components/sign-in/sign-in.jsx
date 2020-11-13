import React, { Component } from "react";

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import Button from '../button/button';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange} 
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        label='Password'
                        required 
                    />

                    <Button type='submit'>Sign IN</Button>
                </form>
            </div>
        )
    }
}

export default SignIn;