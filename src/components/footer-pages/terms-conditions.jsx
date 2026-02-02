import React from 'react';

const TermsConditions = () => {
  return (
    <article className="policy-article">
      {/* Header */}
      <header className="policy-header">
        <h1 className="policy-title">
          Terms of Service
        </h1>
        <p className="policy-date">
          Doc. Ref: N-TOS-01
        </p>
      </header>

      {/* Section 1: General */}
      <section className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-number">01</span>
          <h2 className="policy-section-title">
            General
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <p className="policy-text">
            These Terms of Service govern your use of the norden.project website and your purchase 
            of products from norden.project. By placing an order, you agree to be bound by these terms.
          </p>
          <p className="policy-text">
            norden.project is operated by norden.project ApS, registered in Denmark. 
            CVR: [Company Registration Number]. Registered address: Copenhagen, Denmark.
          </p>
          <div className="policy-callout">
            <p className="policy-callout-title">
              Jurisdiction
            </p>
            <p className="policy-callout-text">
              These terms are governed by Danish law. Any disputes will be subject to the exclusive 
              jurisdiction of Danish courts.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Products */}
      <section className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-number">02</span>
          <h2 className="policy-section-title">
            Products
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <div>
            <h3 className="policy-subsection-title">
              2.1 Product Descriptions
            </h3>
            <p className="policy-text">
              We make every effort to display our products as accurately as possible. However, 
              we cannot guarantee that your screen's display of colors or textures will be entirely accurate.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              2.2 Availability
            </h3>
            <p className="policy-text">
              All products are subject to availability. In the event that a product is unavailable 
              after you place your order, we will inform you as soon as possible and offer a full refund.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              2.3 Care & Maintenance
            </h3>
            <p className="policy-text">
              Each product comes with specific care instructions. Following these instructions is 
              essential to maintain the quality and longevity of your purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Pricing & Payment */}
      <section className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-number">03</span>
          <h2 className="policy-section-title">
            Pricing & Payment
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <div>
            <h3 className="policy-subsection-title">
              3.1 Pricing
            </h3>
            <p className="policy-text">
              All prices are displayed in Danish Kroner (DKK) and include VAT unless otherwise stated. 
              Shipping costs are calculated at checkout and are additional to the product price.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              3.2 Payment Methods
            </h3>
            <p className="policy-text">
              We accept payment via major credit cards, MobilePay, and other secure payment methods 
              as displayed at checkout. All transactions are processed securely.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              3.3 Order Confirmation
            </h3>
            <p className="policy-text">
              Once your payment has been successfully processed, you will receive an order confirmation 
              email. This constitutes acceptance of your order and forms a binding contract.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              3.4 Price Adjustments
            </h3>
            <p className="policy-text">
              We reserve the right to adjust prices without prior notice. However, any price changes 
              will not affect orders that have already been confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Liability */}
      <section className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-number">04</span>
          <h2 className="policy-section-title">
            Liability
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <div>
            <h3 className="policy-subsection-title">
              4.1 Product Liability
            </h3>
            <p className="policy-text">
              We take great care in selecting and producing our products. If a product is faulty 
              or not as described, please contact us immediately. We will arrange for a replacement 
              or refund in accordance with Danish consumer protection laws.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              4.2 Limitation of Liability
            </h3>
            <p className="policy-text">
              To the extent permitted by law, norden.project is not liable for any indirect, 
              incidental, or consequential damages arising from the use of our products or website.
            </p>
          </div>
          <div>
            <h3 className="policy-subsection-title">
              4.3 Force Majeure
            </h3>
            <p className="policy-text">
              We are not responsible for delays or failures in performance resulting from circumstances 
              beyond our reasonable control, including but not limited to natural disasters, strikes, 
              or government restrictions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Intellectual Property */}
      <section className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-number">05</span>
          <h2 className="policy-section-title">
            Intellectual Property
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <p className="policy-text">
            All content on this website, including text, graphics, logos, images, and software, 
            is the property of norden.project and is protected by Danish and international copyright laws.
          </p>
          <p className="policy-text">
            You may not reproduce, distribute, or create derivative works from any content without 
            our express written permission.
          </p>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section className="policy-section">
        <div className="policy-section-header">
          <span className="policy-section-number">06</span>
          <h2 className="policy-section-title">
            Contact & Disputes
          </h2>
        </div>
        <div className="policy-section-content policy-space-y-4">
          <p className="policy-text">
            If you have any questions about these Terms of Service or wish to file a complaint, 
            please contact us at:
          </p>
          <div className="policy-info-box">
            <p>norden.project ApS</p>
            <p>Copenhagen, Denmark</p>
            <p style={{paddingTop: '0.5rem'}}>
              Email:{' '}
              <a href="mailto:legal@norden.project">
                legal@norden.project
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="policy-footer">
        <p className="policy-footer-text policy-text-italic">
          These terms were last updated in October 2024. We reserve the right to modify these 
          terms at any time. Changes will be effective immediately upon posting to this page.
        </p>
      </footer>
    </article>
  );
};

export default TermsConditions;
