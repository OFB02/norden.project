import React from 'react';
import { Package, MapPin, RotateCcw } from 'lucide-react';

const ShippingReturns = () => {
  return (
    <article className="policy-article">
      {/* Header */}
      <header className="policy-header">
        <h1 className="policy-title">
          Shipping & Returns
        </h1>
        <p className="policy-date">
          Last updated: October 2024 / Copenhagen
        </p>
      </header>

      {/* Dispatch Section */}
      <section className="policy-section">
        <div className="policy-section-header">
          <Package style={{width: '1.25rem', height: '1.25rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
          <h2 className="policy-section-title">
            Dispatch
          </h2>
        </div>
        <div className="policy-section-content">
          <p className="policy-text policy-mb-4">
            Orders are packed with care in our Copenhagen studio. We aim to ship within 24 hours 
            of order confirmation (Monday–Friday, excluding Danish public holidays).
          </p>
          <p className="policy-text policy-text-muted">
            Each piece is wrapped in archival tissue and sent in minimal, recyclable packaging 
            bearing our signature seal.
          </p>
        </div>
      </section>

      {/* Denmark Shipping */}
      <section className="policy-section">
        <div className="policy-section-header">
          <MapPin style={{width: '1.25rem', height: '1.25rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
          <h2 className="policy-section-title">
            Denmark Shipping
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-6">
          <div>
            <h3 className="policy-subsection-title">
              DAO Home Delivery
            </h3>
            <p className="policy-text">
              Standard delivery to your address. Expected delivery: 1–2 business days.
            </p>
            <p className="policy-text policy-text-small policy-text-muted" style={{marginTop: '0.5rem', fontFamily: 'Courier New, monospace'}}>
              Shipping cost: DKK 49
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              GLS ParcelShop
            </h3>
            <p className="policy-text">
              Collect at your nearest GLS ParcelShop. Expected ready for pickup: 1–2 business days.
            </p>
            <p className="policy-text policy-text-small policy-text-muted" style={{marginTop: '0.5rem', fontFamily: 'Courier New, monospace'}}>
              Shipping cost: DKK 39
            </p>
          </div>
          <div style={{paddingTop: '1rem', borderTop: '1px solid rgba(28, 28, 28, 0.1)'}}>
            <p className="policy-text-small policy-text-italic">
              Free shipping on orders above DKK 800.
            </p>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-4">
          International Shipping
        </h2>
        <div className="policy-section-content policy-space-y-4">
          <div>
            <h3 className="policy-subsection-title">
              European Union
            </h3>
            <p className="policy-text">
              Standard shipping within the EU via GLS. Expected delivery: 2–5 business days.
            </p>
            <p className="policy-text policy-text-small policy-text-muted" style={{marginTop: '0.5rem', fontFamily: 'Courier New, monospace'}}>
              Shipping cost: DKK 89
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              Rest of World
            </h3>
            <p className="policy-text">
              International shipping is calculated at checkout. Expected delivery: 5–10 business days.
            </p>
            <p className="policy-text-small policy-text-italic" style={{marginTop: '0.5rem'}}>
              Please note: Import duties and taxes may apply depending on your country's regulations. 
              These are the responsibility of the recipient.
            </p>
          </div>
        </div>
      </section>

      {/* Returns Section */}
      <section className="policy-section">
        <div className="policy-section-header">
          <RotateCcw style={{width: '1.25rem', height: '1.25rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
          <h2 className="policy-section-title">
            Returns & Exchanges
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <p className="policy-text">
            We offer a 14-day return policy from the date you receive your order. Items must be 
            unused, unworn, and in their original packaging with all tags attached.
          </p>
          <div className="policy-callout" style={{margin: '1rem 0'}}>
            <p className="policy-callout-title">
              Important
            </p>
            <p className="policy-callout-text">
              Return shipping costs are the responsibility of the customer, unless the item received 
              was faulty or incorrect.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              How to Return
            </h3>
            <ol className="policy-list">
              <li className="policy-list-item">
                <span className="policy-list-marker policy-list-marker-mono">01.</span>
                <span>Contact us at hello@norden.project with your order number</span>
              </li>
              <li className="policy-list-item">
                <span className="policy-list-marker policy-list-marker-mono">02.</span>
                <span>Pack the item securely in its original packaging</span>
              </li>
              <li className="policy-list-item">
                <span className="policy-list-marker policy-list-marker-mono">03.</span>
                <span>Send to the return address provided in our confirmation email</span>
              </li>
              <li className="policy-list-item">
                <span className="policy-list-marker policy-list-marker-mono">04.</span>
                <span>Refunds are processed within 5-7 business days of receiving the return</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="policy-footer">
        <p className="policy-text policy-text-small policy-text-muted">
          For any questions regarding shipping or returns, please contact our team at{' '}
          <a href="mailto:hello@norden.project" style={{textDecoration: 'underline', color: 'inherit', transition: 'color 0.2s'}}>
            hello@norden.project
          </a>
        </p>
      </footer>
    </article>
  );
};

export default ShippingReturns;
