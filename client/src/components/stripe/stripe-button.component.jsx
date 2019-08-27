import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_ymzWMmPKCC9HKTETU2gBHNzr008Z3faESv';

    const onToken = token => {
        axios({
            method: 'post',
            url: 'payment',
            data: {
                amount: stripePrice,
                token
            }
        }).then(response => {
            alert('payment successful');
        }).catch(error =>{
            console.log('payment error: ', JSON.parse(error));
            alert('There was an issue with your payment, make sure that you are using provided test card.');
        })
    }

    return(
        <StripeCheckout
            lable='Pay Now'
            name='SADUCCI STORE'
            description={`Your total is $${price}`}
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default stripeCheckoutButton