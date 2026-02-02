import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckoutLayout from './CheckoutLayout';

const CheckoutPage = () => {
  const location = useLocation();
  const quantity = location.state?.quantity || 1;
  
  return <CheckoutLayout quantity={quantity} />;
};

export default CheckoutPage;
