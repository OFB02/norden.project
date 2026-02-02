import React from 'react';
import './OrderSummary.css';
import website1 from '../../images/website1.png';

const OrderSummary = ({ quantity = 1 }) => {
  const pricePerItem = 450;
  const subtotal = pricePerItem * quantity;

  return (
    <div className="order-summary">
      {/* Header */}
      <div className="summary-header">
        <h2 className="summary-title">ORDER SUMMARY</h2>
      </div>

      {/* Product Card */}
      <div className="summary-product">
        <div className="product-display">
          {/* Product Image */}
          <div className="product-image">
            <img src={website1} alt="N.01 Canvas Tote" />
            {quantity > 1 && <span className="quantity-badge">{quantity}</span>}
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h3 className="product-name">
              N.01 / THE HEAVY CANVAS TOTE
            </h3>
            <p className="product-variant">One Size / Natural</p>
            <p className="product-price">{pricePerItem}.00 DKK {quantity > 1 && `× ${quantity}`}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="summary-divider"></div>

        {/* Financials */}
        <div className="summary-financials">
          {/* Subtotal */}
          <div className="financial-row">
            <span className="financial-label">Subtotal</span>
            <span className="financial-value">{subtotal.toFixed(2)} DKK</span>
          </div>

          {/* Shipping */}
          <div className="financial-row">
            <span className="financial-label">Shipping</span>
            <span className="financial-value placeholder">
              Calculated next step
            </span>
          </div>

          {/* Total */}
          <div className="financial-row total-row">
            <span className="total-label">TOTAL</span>
            <span className="total-value">{subtotal.toFixed(2)} DKK</span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="summary-info">
        <p>
          All orders are processed with care in Copenhagen. Free returns within 30 days.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
