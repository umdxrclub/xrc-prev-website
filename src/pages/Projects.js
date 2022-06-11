/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import XR_CONSTANTS from '../XR_CONSTANTS';

function Projects() {
    return (
        
        <div id="Projects">

            <HalfBanner pageName="Projects" headerImage="projects" subheading={XR_CONSTANTS.PAGE_DESCRIPTIONS.PROJECTS}/>

            <div class="section"></div>

        </div>

    );
}

export default Projects;