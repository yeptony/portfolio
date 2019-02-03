import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>
          Coded with love by <Link to="https://github.com/yeptony">yeptony</Link>
        </p>
        <p>All rights reserved - 2019</p>
      </div>
    </footer>
  );
}

export default Footer;
