import React from 'react'

const Footer = () => (
  <footer>
    <div className="footer row">
      <ul className="version">
        <li>
          <a href="https://github.com/KhalisFoundation/sttm-web/releases" target="_blank" rel="noopener noreferrer"></a>
        </li>
      </ul>
      <ul className="menu footer-menu">
        <li>
          <a href="/help">Help</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="https://form.jotform.com/80266126732151" target="_blank" rel="noopener noreferrer">Feedback</a>
        </li>
        <li>
          <a href="/terms-of-service">Legal</a>
        </li>
        <li>
          <a href="https://khalisfoundation.org/portfolio/sikhitothemax-everywhere/" target="_blank" rel="noopener noreferrer">Desktop App</a>
        </li>
      </ul>
      <div className="copyright">
        Copyright © 2018 Khalis Foundation
        <span>, SikhiToTheMax Trademark SHARE Charity, UK</span>
      </div>
    </div>
  </footer>
)

export default Footer