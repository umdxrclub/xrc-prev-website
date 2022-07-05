/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import Challenge from '../components/Challenge';
import ProjectCard from '../components/ProjectCard';
import { PROJECT_PAGE } from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';

function Projects() {
    return (
        
        <div id="Projects">

            <HalfBanner pageName="Projects" headerImage="projects" subheading={PROJECT_PAGE.DESCRIPTION}/>

            <div className="section padding-medium">

                <ReactMarkdown children={PROJECT_PAGE.PARAGRAPH} linkTarget="_blank"></ReactMarkdown>
                <div className="spacer"></div>

                <h2 className="text-align-right">CHALLENGES</h2>
                <div className="horizontal-flex-container">
                    {
                        PROJECT_PAGE.CHALLENGE_INFORMATION.map(challenge => {
                            return <Challenge id={PROJECT_PAGE.CHALLENGE_INFORMATION.indexOf(challenge)} {...challenge}/>
                        })
                    }
                </div>
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