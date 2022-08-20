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
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

function Projects() {

    document.title = "Projects | XR Club at UMD"

    if (window.location.href.indexOf("localhost") == -1) {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'projects', 
        });
    }

    return (
        
        <div id="Projects">

            <HalfBanner pageName="Projects" headerImage="projects" subheading={PROJECT_PAGE.DESCRIPTION}/>

            <div className="section padding-medium">

                <ReactMarkdown children={PROJECT_PAGE.PARAGRAPH} linkTarget="_blank"></ReactMarkdown>
                <div className="spacer"></div>

                <h2 className="text">PROJECT SHOWCASE</h2>
                <div className="horizontal-flex-container">
                    {
                        PROJECT_PAGE.PROJECTS_INFORMATION.map(project => {
                            return <ProjectCard {...project}/>
                        })
                    }
                </div>

                <div class="spacer"></div>

                <h2 className="text-align-right">CHALLENGES</h2>
                {
                    PROJECT_PAGE.CHALLENGE_INFORMATION.map(challenge => {
                        return <Challenge id={PROJECT_PAGE.CHALLENGE_INFORMATION.indexOf(challenge)} {...challenge}/>
                    })
                }

            </div>

        </div>

    );
}

export default Projects;