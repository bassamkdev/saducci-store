import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart, removeItem, addItems} from '../../redux/cart/cart.actions'

import {CheckoutItemContainer, 
        CheckoutImageContainer, 
        TextContainer, 
        QuantityContainer, 
        RemoveButtonContainer} 
from './checkoutItem.styles'

const CheckoutItem = ({cartItem, clearItem, removeItem,addItems}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return(
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt='item' />
            </CheckoutImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={()=>addItems(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={()=>clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    removeItem: item => dispatch(removeItem(item))

})

export default connect(null,mapDispatchToProps)(CheckoutItem);