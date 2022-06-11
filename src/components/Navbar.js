import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {

  React.useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (anchor) {
        const anchorEl = document.getElementById(anchor);
        if (anchorEl) {
            anchorEl.scrollIntoView();
        }
    }
  }, []);

  return (
    <nav>
        <div className="nav-wrapper">
            <Link to='/' className="nav-link underline">home</Link>
            <Link to='/about' className="nav-link underline">about</Link>
            <Link to='/events' className="nav-link underline">events</Link>
            <Link to='/lab' className="nav-link underline">lab</Link>
            <HashLink to="#get-involved" className="nav-button white bg-cool-red">get involved</HashLink>
        </div>
    </nav>
  );
}

export default Navbar;