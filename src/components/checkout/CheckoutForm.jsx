import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [shippingMethod, setShippingMethod] = useState('dao');
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="checkout-form">
      {/* Logo */}
      <div className="checkout-logo">
        <h1>norden.project</h1>
      </div>

      {/* Breadcrumbs */}
      <div className="checkout-breadcrumbs">
        <span className="inactive">Cart</span>
        <span className="separator">/</span>
        <span className="active">Information</span>
        <span className="separator">/</span>
        <span className="inactive">Shipping</span>
        <span className="separator">/</span>
        <span className="inactive">Payment</span>
      </div>

      {/* Contact Section */}
      <section className="checkout-section">
        <h2 className="checkout-section-title">CONTACT</h2>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            className="checkout-input"
          />
        </div>
      </section>

      {/* Shipping Address Section */}
      <section className="checkout-section">
        <h2 className="checkout-section-title">SHIPPING ADDRESS</h2>
        
        <div className="input-row">
          <input
            type="text"
            placeholder="First name"
            className="checkout-input"
          />
          <input
            type="text"
            placeholder="Last name"
            className="checkout-input"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Street address"
            className="checkout-input"
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="checkout-input"
          />
        </div>

        <div className="input-row">
          <input
            type="text"
            placeholder="City"
            className="checkout-input"
          />
          <input
            type="text"
            placeholder="Postal code"
            className="checkout-input"
          />
        </div>

        <div className="input-group">
          <input
            type="tel"
            placeholder="Phone"
            className="checkout-input"
          />
        </div>
      </section>

      {/* Shipping Method Section */}
      <section className="checkout-section">
        <h2 className="checkout-section-title">SHIPPING METHOD</h2>
        <div className="shipping-options">
          {/* DAO Home Delivery */}
          <div
            onClick={() => setShippingMethod('dao')}
            className={`option-card ${shippingMethod === 'dao' ? 'selected' : ''}`}
          >
            <div className="option-content">
              <div className="option-left">
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
                <div className="option-details">
                  <h3>DAO Home Delivery</h3>
                  <p>Climate Compensated</p>
                </div>
              </div>
              <span className="option-price">45.00 DKK</span>
            </div>
          </div>

          {/* Bike Courier */}
          <div
            onClick={() => setShippingMethod('bike')}
            className={`option-card ${shippingMethod === 'bike' ? 'selected' : ''}`}
          >
            <div className="option-content">
              <div className="option-left">
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
                <div className="option-details">
                  <h3>Bike Courier</h3>
                  <p>Copenhagen Only</p>
                </div>
              </div>
              <span className="option-price">25.00 DKK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="checkout-section">
        <h2 className="checkout-section-title">PAYMENT</h2>
        <div className="payment-options">
          {/* Credit Card */}
          <div
            onClick={() => setPaymentMethod('card')}
            className={`option-card ${paymentMethod === 'card' ? 'selected' : ''}`}
          >
            <div className="option-content">
              <div className="option-left">
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
                <div className="option-details">
                  <h3>Credit Card</h3>
                </div>
              </div>
            </div>
          </div>

          {/* MobilePay */}
          <div
            onClick={() => setPaymentMethod('mobilepay')}
            className={`option-card ${paymentMethod === 'mobilepay' ? 'selected' : ''}`}
          >
            <div className="option-content">
              <div className="option-left">
                <div className="custom-radio">
                  <div className="custom-radio-inner"></div>
                </div>
                <div className="option-details">
                  <h3>MobilePay</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pay Button */}
      <button className="pay-button">
        PAY NOW
      </button>

      {/* Micro-copy */}
      <div className="checkout-microcopy">
        <p>Secure checkout. Ships from Copenhagen.</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
