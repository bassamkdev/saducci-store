import React from 'react';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartItemsTotal } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import {CheckoutPageContainer,
        CheckoutHeaderContainer, 
        HeaderBlockContainer, 
        TotalContainer, 
        WarningContainer
} from './checkout.styles'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe-button.component'

const CheckOut = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
            }
        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer>
           *Please use this test card for payments*
           <br/>
           4242 4242 4242 4242 - EXP: 01/20 - CVV:123 
        </WarningContainer>
        <StripeCheckoutButton  price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps=createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOut);