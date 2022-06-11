/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';
import HalfBanner from '../components/HalfBanner';
import XR_CONSTANTS from '../XR_CONSTANTS';

function About() {
    return (
        
        <div id="About">

            <HalfBanner pageName="About Us" headerImage="about" subheading={XR_CONSTANTS.PAGE_DESCRIPTIONS.ABOUT}/>

            <div class="section"></div>

        </div>

    );
}

export default About;