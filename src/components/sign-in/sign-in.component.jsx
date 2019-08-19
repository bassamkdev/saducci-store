import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogleStart, signInWithEmailStart} from '../../redux/users/user.actions'

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
        
        const {onEmailSignIn} =this.props; 
        const {email, password} = this.state;
        onEmailSignIn(email,password);
    }

    handleChange = event => {
        const { name, value } = event.target ;

        this.setState({[name]: value});
    }

    render(){
        const { onGoogleSignIn } = this.props;
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
                        <CustomButton type='button' onClick={onGoogleSignIn} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onGoogleSignIn: ()=>dispatch(signInWithGoogleStart()),
    onEmailSignIn: (email,password)=>dispatch(signInWithEmailStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);