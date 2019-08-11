import React from 'react'

import {CartIconContainer, ItemCountContainer, ShoppingIcon} from './cart-icon.styled'

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {selectCartItemQuantity} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect';


const CartIcon = ({toggleCartHidden, cartItemQuantity}) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon/>
        <ItemCountContainer>
            {cartItemQuantity}
        </ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItemQuantity : selectCartItemQuantity
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);