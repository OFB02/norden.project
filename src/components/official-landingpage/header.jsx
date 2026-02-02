import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../styles/official-landingpage/header.css';

function OfficialHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isShopPage = location.pathname === '/shop';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (isHomePage) {
      // If on home page, scroll to about section
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with hash
      navigate('/#about');
      // After navigation, scroll to about section
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>Free shipping on all orders over 500 DKK</p>
      </div>

      {/* Main Header */}
      <header className={`official-header ${isShopPage && !scrolled ? 'shop-header' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="official-header-container">
          {/* Left Navigation */}
          <nav className="official-nav-left">
            {isShopPage ? (
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Shop</a>
            ) : (
              <Link to="/shop">Shop</Link>
            )}
            <a href="#about" onClick={handleAboutClick}>About</a>
          </nav>

          {/* Center Logo */}
          <div className="official-logo">
            <Link to="/" onClick={scrollToTop}>norden.project</Link>
          </div>

          {/* Right Function */}
          <div className="official-nav-right">
            <Link to="/checkout">Bag (0)</Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default OfficialHeader;
