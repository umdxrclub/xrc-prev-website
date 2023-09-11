import React from 'react'
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Navbar extends React.Component {
  constructor(props) {
    let isMobile = window.innerWidth <= 800;
    super(props);
    this.state = { 
      mobile : isMobile,
      toggled : false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  // Switch between mobile or desktop state
  resize() {
    let isMobile = window.innerWidth <= 1200;
    let banner = document.getElementsByClassName("halfpage-banner");
    let nav = document.getElementById("navbar");
    banner = (banner.length > 0) ? banner[0] : null;

    // Show navbar if restored to desktop, otherwise hide
    if (!isMobile) {
        nav.style.visibility = "visible";
        nav.style.opacity = 1;
        nav.style.marginTop = "0vh";
        if (banner) {
          banner.style.height = "60vh";
        }
    } else {
        nav.style.visibility = "hidden";
        nav.style.opacity = 0;
        nav.style.marginTop = "-40vh";
        if (banner) {
          banner.style.height = "70vh";
        }
    }
    this.setState({ 
      mobile : isMobile,
      toggled : false,
    });
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resize);
  }

  toggleNav() {

    if (this.state.mobile) {
      let banner = document.getElementsByClassName("halfpage-banner");
      let nav = document.getElementById("navbar");
      banner = (banner.length > 0) ? banner[0] : null;

      // If menu is currently collapsed
      if (nav.style.opacity == 0) {
        nav.style.visibility = "visible";
        nav.style.opacity = 1;
        nav.style.marginTop = 0;
        if (banner) {
          banner.style.height = "110vh";
        }

      // If menu is currently open
      } else {
        nav.style.visibility = "hidden";
        nav.style.opacity = 0;
        nav.style.marginTop = "-40vh";
        if (banner) {
          banner.style.height = "70vh";
        }
      }
    }
    this.setState({ toggled : !this.state.toggled });
  }

  render() {

    return (
      <div>
        <input type="checkbox" id="menu-checkbox" checked={this.state.toggled} onChange={this.toggleNav}/>
        <label for="menu-checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
        <nav id="navbar">
            <div className="nav-wrapper" onClick={this.toggleNav}>
                <Link to='/' className="nav-link underline">home</Link>
                <Link to='/about' className="nav-link underline">about</Link>
                <Link to='/news' className="nav-link underline">news</Link>
                <Link to='/events' className="nav-link underline">events</Link>
                <Link to='/lab' className="nav-link underline">lab</Link>
                <Link to='/projects' className="nav-link underline">projects</Link>
                {/* <Link to='/donate' className="nav-link underline">donate</Link> */}
                <HashLink to="#get-involved" className="nav-button white bg-cool-red">get involved</HashLink>
            </div>
        </nav>
        </div>
    );
  }
}

export default Navbar;