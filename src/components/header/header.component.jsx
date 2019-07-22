import React from 'react';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link to='/'>
            <Logo className='logo-container'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ? 
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                :
                    <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header;