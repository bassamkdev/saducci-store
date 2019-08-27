import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogleStart, signInWithEmailStart} from '../../redux/users/user.actions'

import {
        SignInContainer,
        ButtonsContainer,
        TitleContainer
} from './sign-in.styles'

const SignIn = ({onEmailSignIn, onGoogleSignIn}) => {
    const [userCredential, setCredential] = useState({
            email: '',
            password: ''
        });
        
    const {email, password} = userCredential;

    const handleSubmit = async event => {
        event.preventDefault();
        
        onEmailSignIn(email,password);
    }

    const handleChange = event => {
        const { name, value } = event.target ;

        setCredential({...userCredential, [name]: value});
    }
    return(
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                name='email' 
                type='email' 
                value={email}
                handleChange={handleChange} 
                required
                lable="Email" />
    
                <FormInput 
                name='password'
                type='password' 
                value={password}
                handleChange={handleChange}
                lable="Password"
                required />
                <ButtonsContainer>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={onGoogleSignIn} isGoogleSignIn>Sign in with Google</CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    onGoogleSignIn: ()=>dispatch(signInWithGoogleStart()),
    onEmailSignIn: (email,password)=>dispatch(signInWithEmailStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);