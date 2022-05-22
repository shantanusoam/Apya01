import React from 'react';
import './checkoutstyles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../Component/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../Component/stripe-button/stripe-button.component';
import HeaderNav from '../../Component/header/headerNav.component';
const CheckoutPage = ({ cartItems, total }) => (
  <div>
    <HeaderNav />
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>TOTAL: ₹{total}</span>
      </div>
      <StripeCheckoutButton price={total}></StripeCheckoutButton>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
