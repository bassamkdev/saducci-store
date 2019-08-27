import React from 'react';

import {CartItemContainer,
        ImageContainer,
        ItemDetailsContainer,
        NameContainer} 
from './cart-item.styles'

const CartItem = ({cartItem}) => (
    <CartItemContainer>
        <ImageContainer src={cartItem.imageUrl} alt='item' />
        <ItemDetailsContainer>
            <NameContainer>{cartItem.name}</NameContainer>
            <span>{cartItem.quantity}x ${cartItem.price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;