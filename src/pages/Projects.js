/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import { PROJECT_PAGE, PROJECTS_INFORMATION } from '../XR_CONSTANTS';

function Projects() {
    return (
        
        <div id="Projects">

            <HalfBanner pageName="Projects" headerImage="projects" subheading={PROJECT_PAGE.DESCRIPTION}/>

            <div class="section"></div>

        </div>

    );
}

export default Projects;