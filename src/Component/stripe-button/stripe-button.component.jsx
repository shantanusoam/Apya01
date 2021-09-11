import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JQcKCSJgCPnVShXYWURuWXMbWM5VZLiAG6zliSueo1oTrvIFVG99dZdKKB9Mx6827BoWwUewCDqmrHARQVNHwJi00uDnKkbil';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successfull');
    }

    return(
        <StripeCheckout
        label="Pay Now"
        name="APYA"
        billingAddress
        shippingAddress
        image="https://shantanusoam.github.io/Apya/img/APYA.png"
        description={`Your total is ₹${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        currency="INR"
        />
    )
}
 
export default StripeCheckoutButton;