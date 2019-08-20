import React from 'react'
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/users/user.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {
    SignupContainer,
    TitleContainer
} from './sign-up.styles'

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {signUpStart} = this.props;
        const {displayName,email,password,confirmPassword}= this.state;
        if (password!==confirmPassword) {
            alert("passwords do not match");
            return;
        }
        signUpStart(email, password, displayName)
        // try{
        //     const {user} = await auth.createUserWithEmailAndPassword(email, password);
        //     console.log(user);
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     });
        //     console.log({displayName})
        //     await createUserProfileDocument(user, {displayName})
        // }catch(error){
        //     console.error(error);
        // }
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render(){
        const {displayName,email,password,confirmPassword}= this.state;
        return(
            <SignupContainer>
                <TitleContainer>I don't have an account</TitleContainer>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        lable='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        lable='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        lable='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        lable='Confirm Password'
                        required
                    />
                    <CustomButton type='submit' >SIGN UP </CustomButton>
                </form>
            </SignupContainer>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    signUpStart: (email, password, displayName) => 
    dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp);