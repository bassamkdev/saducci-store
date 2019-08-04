import React from 'react'

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemQuantity} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';


const CartIcon = ({toggleCartHidden, cartItemQuantity}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>
            {cartItemQuantity}
        </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItemQuantity : selectCartItemQuantity
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);