import React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser} from '../../redux/users/user.selectors'
import  {selectCartHidden} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';

import {signOutStart} from '../../redux/users/user.actions'

import {
        HeaderContainer,
        LogoContainer,
        OptionsContainer,
        OptionLink
} from './header.styles';

const Header = ({currentUser, hidden, signOutStart}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink>
            {
                currentUser ? 
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                  ( <OptionLink to='/signin'>SIGN IN</OptionLink>)
            }
            <CartIcon/>
        </OptionsContainer>
        {hidden? null : <CartDropdown/>}
    </HeaderContainer>
)

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);