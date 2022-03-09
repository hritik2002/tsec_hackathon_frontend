import * as React from 'react';

export default function Header() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Log In</a></li>
        <li><a href="badges.html">Register</a></li>
      </ul>
    </div>
  </nav>
  );
}
