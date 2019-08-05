import React from 'react';
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {withRouter} from 'react-router-dom'

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?    
                (cartItems.map(cartItem =>{
                   return(<CartItem key={cartItem.id} cartItem={cartItem} />)
                }))
                :
                (<span className='empty-msg'>Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={()=> {history.push('/checkout'); toggleCartHidden();}} >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));