import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className="nav-wrapper">
            <Link to='/' className="nav-link underline">home</Link>
            <Link to='/' className="nav-link underline">about</Link>
            <Link to='/' className="nav-link underline">events</Link>
            <Link to='/' className="nav-link underline">lab</Link>
            <a href="#get-involved" className="nav-button white bg-cool-red">get involved</a>
        </div>
    </nav>
  );
}

export default Navbar;