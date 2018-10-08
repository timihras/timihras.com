import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <ul className="footer-menu mt-l mb-l">
        <li><Link to="/terms-of-use">Terms Of Use</Link></li>
        <li><Link to="/cookie-policy">Cookie Policy</Link></li>
        <li><Link to="/privacy-notice">Privacy Notice</Link></li>
      </ul>
      <hr className="hr-center small mb-l" />
      <div>(c) TIMAJA, Timi Hras s.p.</div>
    </footer>
  )
}

export default Footer
