import React from 'react'
import { Link } from 'gatsby'
import SocialIcons from './social-icons'
import Logo from './svg/logo'

const Navigation = (props) => {
  const links = [
    { path: '/', title: 'Home' },
    { path: '/blog/', title: 'Blog' },
    { path: '/contact/', title: 'Contact' },
  ];
  const { logoWhite } = props;
  return (
    <nav role="navigation">
      <Link to="/" className="logo-toggle">
        <Logo logoWhite={logoWhite} />
      </Link>
      <div id="menu-toggle">

        <input type="checkbox" checked={props.nav} onChange={props.toggleNav} />

        <span></span>
        <span></span>
        <div id="menu">
          <div id="links">
            <ul>
              {
                links.map(link => (
                  <li key={link.title}>
                    <Link to={link.path} onClick={props.closeNav}>{link.title}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div id="contact">
            <h5>Get in contact</h5>
            <p>+ 386 (0) 31 786 716</p>
            <SocialIcons closeNav={props.closeNav} />
          </div>
        </div>
      </div>
      <section id="main-menu">
        <Link to="/" className="flex-1">
          <Logo />
        </Link>
        <ul id="menu-reg">
          {
            links
              .filter(link => link.path !== '/')
              .map(link => (
                <li key={link.title}>
                  <Link to={link.path}>{link.title} </Link>
                </li>
              ))
          }
        </ul>
      </section>
    </nav>
  );
}

export default Navigation;