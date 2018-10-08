import React from 'react'
import { Link } from 'gatsby'
import { FaInstagram, FaBehance, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const SocialIcons = (props) => {
  return (
    <ul className="social-icons">
      <li>
        <Link to="/contact" onClick={props.closeNav}><FaEnvelope className="social-icon" /></Link>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/timihras"><FaInstagram className="social-icon" rel="noopener noreferrer" /></a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://behance.com/timihras"><FaBehance className="social-icon" rel="noopener noreferrer" /></a>
      </li>
      <li>
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/timihras"><FaLinkedinIn className="social-icon" rel="noopener noreferrer" /></a>
      </li>
    </ul>
  );
};

export default SocialIcons;