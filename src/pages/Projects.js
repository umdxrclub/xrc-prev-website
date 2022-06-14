/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import Challenge from '../components/Challenge';
import ProjectCard from '../components/ProjectCard';
import { PROJECT_PAGE } from '../XR_CONSTANTS';

function Projects() {
    return (
        
        <div id="Projects">

            <HalfBanner pageName="Projects" headerImage="projects" subheading={PROJECT_PAGE.DESCRIPTION}/>

            <div className="section padding-medium">

                <p>{PROJECT_PAGE.PARAGRAPH}</p>
                <div className="spacer"></div>

                <h2 className="text-align-right">CHALLENGES</h2>
                {
                    PROJECT_PAGE.CHALLENGE_INFORMATION.map(challenge => {
                         return <Challenge id={PROJECT_PAGE.CHALLENGE_INFORMATION.indexOf(challenge)} {...challenge}/>
                    })
                }
                <div class="spacer"></div>

                <h2>PROJECT SHOWCASE</h2>
                <div className="horizontal-flex-container">
                    {
                        PROJECT_PAGE.PROJECTS_INFORMATION.map(project => {
                            return <ProjectCard {...project}/>
                        })
                    }
                </div>

            </div>

        </div>

    );
}

export default Projects;