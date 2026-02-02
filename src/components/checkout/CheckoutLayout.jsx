import React from 'react';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import './CheckoutLayout.css';

const CheckoutLayout = ({ quantity = 1 }) => {
  return (
    <div className="checkout-layout">
      {/* Desktop Split Screen Layout */}
      <div className="checkout-grid">
        {/* Left Side - White Background - Forms */}
        <div className="checkout-form-side">
          <CheckoutForm />
        </div>

        {/* Right Side - Cream Background - Order Summary */}
        <div className="checkout-summary-side">
          <OrderSummary quantity={quantity} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutLayout;
