import React, { Component } from "react";

import './sign-in.scss';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import { auth, signInWithGoogle } from "../../firebase/firebase";


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' });
        } 
        catch (error){
            console.log(error);
        }


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
                        value={this.state.password} 
                        label='Password'
                        required 
                    />

                    <div className='buttons'>
                        <Button type='submit'>Sign IN</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignin>Sign IN With Google</Button>                 
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;