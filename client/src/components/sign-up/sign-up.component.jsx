import React, {useState} from 'react'
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/users/user.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
    SignupContainer,
    TitleContainer,
    ButtonsContainer
} from './sign-up.styles'

const SignUp = ({signUpStart}) => {
    const [userCredential, setCredential]=useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    const {displayName,email,password,confirmPassword}= userCredential;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password!==confirmPassword) {
            alert("passwords do not match");
            return;
        }
        signUpStart(email, password, displayName)
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredential({...userCredential, [name]: value});
    }

    return(
        <SignupContainer>
            <TitleContainer>I don't have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    lable='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    lable='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    lable='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    lable='Confirm Password'
                    required
                />
                <ButtonsContainer>
                  <CustomButton type='submit'>SIGN UP </CustomButton>
                </ButtonsContainer>
            </form>
        </SignupContainer>
    )
}

const mapDispatchToProps = dispatch =>({
    signUpStart: (email, password, displayName) => 
    dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);