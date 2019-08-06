import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const stripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_ymzWMmPKCC9HKTETU2gBHNzr008Z3faESv';

    const onToken = token => {
        console.log(token);
        alert('Successful Payment');
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