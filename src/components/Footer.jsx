import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className="footer">
    <Link to="/404">Terminos de uso</Link>
    <Link to="/404">Declaración de privacidad</Link>
    <Link to="/404">Centro de ayuda</Link>
  </footer>
);

export default Footer;