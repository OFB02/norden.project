import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import '../../styles/official-landingpage/footer.css';

function OfficialFooter() {
  const [email, setEmail] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);
  const [state, handleFormspreeSubmit] = useForm('mvzgjjar');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleFormspreeSubmit(e);
    if (!state.errors) {
      setEmail('');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowContactModal(true);
  };

  const closeModal = () => {
    setShowContactModal(false);
  };

  return (
    <footer className="official-footer" id="contact">
      <div className="footer-container">
        {/* Main Grid - 4 Columns */}
        <div className="footer-grid">
          {/* Column 1: Brand Identity */}
          <div className="footer-column footer-brand">
            <h3>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                norden.project
              </Link>
            </h3>
            <div className="brand-tagline">
              <p>Est. Copenhagen.</p>
              <p>Engineered for the everyday.</p>
            </div>
          </div>
          
          {/* Column 2: Navigation */}
          <div className="footer-column footer-nav">
            <Link to="/shop">Shop</Link>
            <a href="#about">About</a>
            <a href="#contact" onClick={handleContactClick}>Contact</a>
          </div>
          
          {/* Column 3: Service */}
          <div className="footer-column footer-service">
            <Link to="/shipping-returns">Shipping & Returns</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          
          {/* Column 4: Newsletter */}
          <div className="footer-column footer-newsletter">
            <h4>Join the project.</h4>
            <p>First access to new drops and archive sales.</p>
            {state.succeeded ? (
              <p style={{color: '#1C1C1C', fontSize: '0.875rem', marginTop: '1rem'}}>
                Thank you for joining! You're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state.submitting}
                  required
                />
                <button type="submit" aria-label="Subscribe" disabled={state.submitting}>
                  {state.submitting ? '...' : '→'}
                </button>
              </form>
            )}
            {state.errors && state.errors.length > 0 && (
              <p style={{color: '#C83C3C', fontSize: '0.75rem', marginTop: '0.5rem'}}>
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
        
        {/* Bottom Baseline */}
        <div className="footer-baseline">
          <p className="baseline-copyright">© 2026 norden.project</p>
          <p className="baseline-coordinates">55°40′N 12°34′E</p>
          <div className="baseline-social">
            <a href="https://www.instagram.com/norden.project" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="contact-modal-overlay" onClick={closeModal}>
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3>Get in touch</h3>
            <p>For inquiries, please contact us at:</p>
            <a href="mailto:hello@nordenproject.co" className="modal-email">
              hello@nordenproject.co
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}

export default OfficialFooter;
