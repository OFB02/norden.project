import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ShippingReturns from './Shipping-Return';
import TermsConditions from './terms-conditions';
import PrivacyPolicy from './privacy-policy';
import '../../styles/PolicyPages.css';

const PolicyLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active policy from URL
  const getActivePolicyFromPath = () => {
    if (location.pathname === '/shipping-returns') return 'shipping';
    if (location.pathname === '/terms-conditions') return 'terms';
    if (location.pathname === '/privacy-policy') return 'privacy';
    return 'shipping'; // default
  };
  
  const [activePolicy, setActivePolicy] = useState(getActivePolicyFromPath());
  
  useEffect(() => {
    setActivePolicy(getActivePolicyFromPath());
  }, [location.pathname]);

  const policies = [
    { id: 'shipping', label: 'Shipping & Returns', component: ShippingReturns, path: '/shipping-returns' },
    { id: 'terms', label: 'Terms & Conditions', component: TermsConditions, path: '/terms-conditions' },
    { id: 'privacy', label: 'Privacy Policy', component: PrivacyPolicy, path: '/privacy-policy' },
  ];

  const ActiveComponent = policies.find(p => p.id === activePolicy)?.component || ShippingReturns;
  
  const handlePolicyChange = (policyId, path) => {
    setActivePolicy(policyId);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="policy-layout">
      {/* Desktop Layout */}
      <div className="policy-desktop">
        {/* Sticky Sidebar - 25% */}
        <aside className="policy-sidebar">
          <div className="policy-sidebar-content">
            <button 
              onClick={() => navigate('/')} 
              className="policy-back-btn"
            >
              <ArrowLeft style={{width: '1rem', height: '1rem', strokeWidth: 1.5}} />
              <span>Back to Home</span>
            </button>

            <div className="policy-sidebar-header">
              <p className="policy-meta">
                Documentation
              </p>
              <h2 className="policy-sidebar-title">
                Legal
              </h2>
            </div>

            <nav className="policy-nav">
              {policies.map((policy) => (
                <button
                  key={policy.id}
                  onClick={() => handlePolicyChange(policy.id, policy.path)}
                  className={`policy-nav-btn ${activePolicy === policy.id ? 'active' : ''}`}
                >
                  {policy.label}
                </button>
              ))}
            </nav>

            <div className="policy-sidebar-footer">
              <p>
                norden.project<br />
                Copenhagen, Denmark
              </p>
            </div>
          </div>
        </aside>

        {/* Content Area - 75% */}
        <main className="policy-content-wrapper">
          <div className="policy-content">
            <ActiveComponent />
          </div>
        </main>
      </div>

      {/* Mobile Layout */}
      <div className="policy-mobile">
        {/* Mobile Navigation */}
        <div className="policy-mobile-nav">
          <button 
            onClick={() => navigate('/')} 
            className="policy-back-btn-mobile"
          >
            <ArrowLeft style={{width: '1rem', height: '1rem', strokeWidth: 1.5}} />
            <span>Back to Home</span>
          </button>

          <p className="policy-meta">
            Documentation
          </p>
          <div className="policy-mobile-nav-scroll">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => handlePolicyChange(policy.id, policy.path)}
                className={`policy-mobile-nav-btn ${activePolicy === policy.id ? 'active' : ''}`}
              >
                {policy.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Content */}
        <main className="policy-mobile-content">
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
};

export default PolicyLayout;
