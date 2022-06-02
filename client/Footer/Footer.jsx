import React from 'react';
import './Footer.css';
import '../style.css';

const Footer = () => {
  return (
    <footer id="footer">
      <p className="footer__copyright">&copy; Digitální akademie: Web | 2022</p>
      <div className="footer__contacts">
        <a href="https://www.linkedin.com/in/eva-machov%C3%A1-4066b414a/">
          <p className="footer__contact--evca">Evča Machová</p>{' '}
        </a>
        <a href="https://www.linkedin.com/in/nelaletochova/">
          <p className="footer__contact--nelca">Nelča Letochová</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
