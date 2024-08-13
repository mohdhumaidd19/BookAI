import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="App-footer">
      <p>© 2024 BookAI. All rights reserved.</p>
      <div className="footer-links">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;
