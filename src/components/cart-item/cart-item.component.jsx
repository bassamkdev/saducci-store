import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({cartItem}) => (
    <div className='cart-item'>
        <img src={cartItem.imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{cartItem.name}</span>
            <span>{cartItem.quantity}x ${cartItem.price}</span>
        </div>
    </div>
)

export default CartItem;