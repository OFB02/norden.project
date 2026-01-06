import React, { useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify will handle the form submission
    const formData = new FormData(e.target);
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setEmail('');
      })
      .catch((error) => console.error('Form submission error:', error));
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">PROJECT 001</h1>
        <p className="hero-subheadline">The Heavy Shopper. Coming Soon.</p>
        
        {!submitted ? (
          <form 
            name="waitlist" 
            method="POST" 
            onSubmit={handleSubmit}
            className="hero-form"
          >
            <input type="hidden" name="form-name" value="waitlist" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="hero-input"
            />
            <button type="submit" className="hero-button">
              Request Access
            </button>
          </form>
        ) : (
          <p className="hero-thanks">Thanks for joining the waitlist.</p>
        )}
      </div>
    </section>
  );
};

export default Hero;
