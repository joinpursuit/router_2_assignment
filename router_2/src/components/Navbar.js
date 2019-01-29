import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a href='/' className="brand-logo left">Router_2</a>
        <ul className='right'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/random'>RamdomImg</Link></li>
          <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
      </div>
    </nav>
  )

}

export default Navbar;