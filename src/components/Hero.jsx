import React from 'react';
import { useForm } from '@formspree/react';
import '../styles/Hero.css';

const Hero = () => {
  const [state, handleSubmit] = useForm('mvzgjjar');

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-headline">PROJECT 001</h1>
        <p className="hero-subheadline">The Heavy Shopper. Coming Soon.</p>
        
        {state.succeeded ? (
          <p className="hero-thanks">You are on the list. We will be in touch.</p>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="hero-form"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={state.submitting}
              className="hero-input"
            />
            {state.errors && state.errors.length > 0 && (
              <p className="hero-error">Something went wrong. Please try again.</p>
            )}
            <button 
              type="submit" 
              className="hero-button"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Request Access'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Hero;
