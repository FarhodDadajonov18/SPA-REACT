import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
        <nav className='navbar'>
          <div className="nav-wrapper">
            <Link to="/"><span className='logo'>LOGO</span></Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
       </nav>
  )
}

export default Header;