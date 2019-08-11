import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import {
        SignInContainer,
        ButtonsContainer,
        TitleContainer
} from './sign-in.styles'

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''});
        } catch(error) {
            console.log(error);
        }
        this.setState({email: '', password:''})
    }

    handleChange = event => {
        const { name, value } = event.target ;

        this.setState({[name]: value});
    }

    render(){
        return(
            <SignInContainer>
                <TitleContainer>I already have an account</TitleContainer>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    required
                    lable="Email" />
        
                    <FormInput 
                    name='password'
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange}
                    lable="Password"
                    required />
                    <ButtonsContainer>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;