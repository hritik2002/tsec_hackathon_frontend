import * as React from 'react';

export default function Header() {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Log In</a></li>
        <li><a href="badges.html">Register</a></li>
      </ul>
    </div>
  </nav>
  );
}
