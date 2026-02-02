import React from 'react';
import { Shield, Cookie, Mail, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <article className="policy-article">
      {/* Header */}
      <header className="policy-header">
        <h1 className="policy-title">
          Data Protection
        </h1>
        <p className="policy-date">
          Compliance: GDPR / EU
        </p>
      </header>

      {/* Introduction */}
      <section className="policy-section">
        <div className="policy-section-header">
          <Shield style={{width: '1.25rem', height: '1.25rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
          <h2 className="policy-section-title">
            Our Commitment
          </h2>
        </div>
        <div className="policy-section-content">
          <p className="policy-text policy-mb-4">
            At norden.project, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information in accordance 
            with the General Data Protection Regulation (GDPR).
          </p>
          <p className="policy-text policy-text-muted">
            We only collect data that is necessary to provide you with our services and enhance your 
            experience with our brand.
          </p>
        </div>
      </section>

      {/* Data We Collect */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-6">
          Data We Collect
        </h2>
        <div className="policy-section-content policy-space-y-6">
          <div>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem'}}>
              <Mail style={{width: '1rem', height: '1rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
              <h3 className="policy-subsection-title">
                Email & Contact Information
              </h3>
            </div>
            <p className="policy-text policy-pl-7">
              When you subscribe to our newsletter or create an account, we collect your email address 
              and name. This information is used solely to communicate with you about orders, updates, 
              and (if you opt-in) marketing communications.
            </p>
          </div>

          <div>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem'}}>
              <Lock style={{width: '1rem', height: '1rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
              <h3 className="policy-subsection-title">
                Payment Information
              </h3>
            </div>
            <p className="policy-text policy-pl-7">
              Payment details (credit card numbers, billing addresses) are processed securely through 
              our payment partners. We do not store your complete payment information on our servers. 
              All transactions are encrypted using industry-standard SSL technology.
            </p>
          </div>

          <div>
            <h3 className="policy-subsection-title">
              Shipping Information
            </h3>
            <p className="policy-text policy-pl-7">
              To fulfill your order, we collect your shipping address, phone number, and delivery 
              preferences. This information is shared only with our shipping partners and is retained 
              only as long as necessary to complete your order and handle any returns or inquiries.
            </p>
          </div>

          <div>
            <h3 className="policy-subsection-title">
              Browsing Data
            </h3>
            <p className="policy-text policy-pl-7">
              We may collect non-personal data such as browser type, device information, and pages 
              visited to improve our website's functionality and user experience. This data is anonymized 
              and used for analytics purposes only.
            </p>
          </div>
        </div>
      </section>

      {/* How We Use Your Data */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-6">
          How We Use Your Data
        </h2>
        <div className="policy-section-content">
          <ul className="policy-list">
            <li className="policy-list-item">
              <span className="policy-list-marker">—</span>
              <span>Process and fulfill your orders</span>
            </li>
            <li className="policy-list-item">
              <span className="policy-list-marker">—</span>
              <span>Send order confirmations and shipping updates</span>
            </li>
            <li className="policy-list-item">
              <span className="policy-list-marker">—</span>
              <span>Respond to customer service inquiries</span>
            </li>
            <li className="policy-list-item">
              <span className="policy-list-marker">—</span>
              <span>Send marketing communications (only with your explicit consent)</span>
            </li>
            <li className="policy-list-item">
              <span className="policy-list-marker">—</span>
              <span>Improve our website and services</span>
            </li>
            <li className="policy-list-item">
              <span className="policy-list-marker">—</span>
              <span>Comply with legal obligations</span>
            </li>
          </ul>
          <div className="policy-callout" style={{marginTop: '1.5rem'}}>
            <p className="policy-callout-title">
              Important
            </p>
            <p className="policy-callout-text">
              We will never sell, rent, or share your personal data with third parties for their 
              marketing purposes without your explicit consent.
            </p>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="policy-section">
        <div className="policy-section-header">
          <Cookie style={{width: '1.25rem', height: '1.25rem', marginTop: '0.25rem', strokeWidth: 1.5}} />
          <h2 className="policy-section-title">
            Cookies
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <p className="policy-text">
            We use cookies to enhance your browsing experience and ensure our website functions properly. 
            Cookies are small text files stored on your device that help us remember your preferences.
          </p>
          <div>
            <h3 className="policy-subsection-title">
              Essential Cookies
            </h3>
            <p className="policy-text">
              These are necessary for the website to function and cannot be disabled. They include cookies 
              that allow you to navigate the site, use the shopping cart, and access secure areas.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              Analytics Cookies
            </h3>
            <p className="policy-text">
              With your consent, we use analytics cookies to understand how visitors interact with our 
              website. This helps us improve our site's performance and user experience.
            </p>
          </div>
          <p className="policy-text-small policy-text-italic policy-pt-2">
            You can manage your cookie preferences through your browser settings. However, disabling 
            certain cookies may affect the functionality of our website.
          </p>
        </div>
      </section>

      {/* Your Rights */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-6">
          Your Rights Under GDPR
        </h2>
        <div className="policy-section-content policy-space-y-4">
          <p className="policy-text policy-mb-4">
            As an individual in the EU, you have the following rights regarding your personal data:
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
            <div>
              <h3 className="policy-subsection-title" style={{marginBottom: '0.25rem'}}>
                Right to Access
              </h3>
              <p className="policy-text-small policy-pl-4">
                You can request a copy of the personal data we hold about you.
              </p>
            </div>
            <div>
              <h3 className="policy-subsection-title" style={{marginBottom: '0.25rem'}}>
                Right to Rectification
              </h3>
              <p className="policy-text-small policy-pl-4">
                You can ask us to correct any inaccurate or incomplete data.
              </p>
            </div>
            <div>
              <h3 className="policy-subsection-title" style={{marginBottom: '0.25rem'}}>
                Right to Erasure
              </h3>
              <p className="policy-text-small policy-pl-4">
                You can request that we delete your personal data (subject to legal obligations).
              </p>
            </div>
            <div>
              <h3 className="policy-subsection-title" style={{marginBottom: '0.25rem'}}>
                Right to Object
              </h3>
              <p className="policy-text-small policy-pl-4">
                You can object to the processing of your data for marketing purposes.
              </p>
            </div>
            <div>
              <h3 className="policy-subsection-title" style={{marginBottom: '0.25rem'}}>
                Right to Data Portability
              </h3>
              <p className="policy-text-small policy-pl-4">
                You can request your data in a structured, commonly used format.
              </p>
            </div>
          </div>
          <div className="policy-info-box" style={{marginTop: '1.5rem'}}>
            <p className="policy-text-small">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@norden.project">
                privacy@norden.project
              </a>
              <br />
              We will respond to your request within 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-4">
          Data Security
        </h2>
        <div className="policy-section-content">
          <p className="policy-text policy-mb-4">
            We implement appropriate technical and organizational measures to protect your personal 
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <p className="policy-text">
            However, please note that no method of transmission over the internet or electronic storage 
            is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.
          </p>
        </div>
      </section>

      {/* Data Retention */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-4">
          Data Retention
        </h2>
        <div className="policy-section-content">
          <p className="policy-text policy-mb-4">
            We retain your personal data only for as long as necessary to fulfill the purposes outlined 
            in this privacy policy, unless a longer retention period is required by law.
          </p>
          <ul className="policy-list">
            <li className="policy-list-item policy-list-item-small">
              <span className="policy-list-marker policy-list-marker-mono">—</span>
              <span>Order data: 5 years (for accounting and legal purposes)</span>
            </li>
            <li className="policy-list-item policy-list-item-small">
              <span className="policy-list-marker policy-list-marker-mono">—</span>
              <span>Marketing data: Until you unsubscribe or withdraw consent</span>
            </li>
            <li className="policy-list-item policy-list-item-small">
              <span className="policy-list-marker policy-list-marker-mono">—</span>
              <span>Analytics data: Anonymized after 24 months</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="policy-section">
        <h2 className="policy-section-title policy-mb-4">
          Contact Us
        </h2>
        <div className="policy-section-content">
          <p className="policy-text policy-mb-4">
            If you have any questions about this Privacy Policy or how we handle your data, 
            please contact our Data Protection Officer:
          </p>
          <div className="policy-info-box">
            <p>norden.project ApS</p>
            <p>Copenhagen, Denmark</p>
            <p style={{paddingTop: '0.5rem'}}>
              Email:{' '}
              <a href="mailto:privacy@norden.project">
                privacy@norden.project
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="policy-footer">
        <p className="policy-footer-text policy-text-italic">
          This Privacy Policy was last updated in October 2024. We may update this policy from time 
          to time. Any changes will be posted on this page with an updated revision date.
        </p>
      </footer>
    </article>
  );
};

export default PrivacyPolicy;
