import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Above-the-Fold.css';
import website1 from '../../images/website1.png';

const AboveTheFold = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleAddToBag = () => {
    // Add to cart functionality
    console.log('Adding to bag:', quantity);
    // Navigate to checkout with quantity
    navigate('/checkout', { state: { quantity } });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="above-fold">
      <div className="above-fold__container">
        {/* Left Side - Product Image */}
        <div className="above-fold__image">
          <div className="product-image">
            {/* Replace with actual product image */}
            <img 
              src={website1}
              alt="N.01 The Heavy Canvas Tote"
            />
          </div>
        </div>

        {/* Right Side - Sticky Product Info */}
        <div className="above-fold__info">
          <div className="product-info">
            {/* Batch Number */}
            <div className="batch-label">
              BATCH NO. 01 — LIMITED STOCK
            </div>

            {/* Product Title */}
            <h1 className="product-title">
              N.01 / THE HEAVY CANVAS TOTE
            </h1>

            {/* Price */}
            <div className="product-price">
              450 DKK
            </div>

            {/* Description */}
            <p className="product-description">
              The original tote. Constructed from 18oz raw cotton canvas. 
              Designed in Copenhagen to carry the weight of the everyday. 
              Features an inner pocket for essentials.
            </p>

            {/* Specifications */}
            <div className="product-specs">
              <div className="spec-item">
                <span className="spec-label">SIZE</span>
                <span className="spec-value">ONE SIZE</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">COLOR</span>
                <span className="spec-value">NATURAL</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="quantity-selector">
              <span className="quantity-label">QUANTITY</span>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={decrementQuantity}>−</button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-btn" onClick={incrementQuantity}>+</button>
              </div>
            </div>

            {/* Add to Bag Button */}
            <button className="add-to-bag-btn" onClick={handleAddToBag}>
              ADD TO BAG
            </button>

            {/* Shipping Info */}
            <p className="shipping-info">
              Ships within 1-2 days from Copenhagen.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-content">
          <div className="mobile-product-info">
            <span className="mobile-product-name">N.01 Canvas Tote</span>
            <span className="mobile-product-price">450 DKK</span>
          </div>
          <button className="mobile-add-btn" onClick={handleAddToBag}>
            ADD
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboveTheFold;