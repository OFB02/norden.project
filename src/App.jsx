import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OfficialLandingPage from './components/official-landingpage/OfficialLandingPage';
import Shop from './components/shopping/Shop';
import CheckoutPage from './components/checkout/CheckoutPage';
import PolicyLayout from './components/footer-pages/PolicyLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OfficialLandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/shipping-returns" element={<PolicyLayout />} />
        <Route path="/terms-conditions" element={<PolicyLayout />} />
        <Route path="/privacy-policy" element={<PolicyLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
