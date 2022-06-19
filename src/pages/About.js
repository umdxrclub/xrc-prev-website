/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import PersonCard from '../components/PersonCard';
import HalfBanner from '../components/HalfBanner';
import {ABOUT_PAGE } from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';

function About() {
    return (
        
        <div id="About">

            <HalfBanner pageName="About Us" headerImage="about" subheading={ABOUT_PAGE.DESCRIPTION}/>

            {/* Introduction + Photo */}
            <div className="section padding-medium">
                <ReactMarkdown children={ABOUT_PAGE.INTRO_PARAGRAPH} linkTarget="_blank"></ReactMarkdown>
                <div className="spacer"></div>
                <img src="images/group.png"></img>
            </div>

            {/* TODO: Immersive timeline of XR club */}

            {/* Leadership Cards */}
            <h2 className="padding-wide">LEADERSHIP</h2>
            <div className="section horizontal-flex-container">
                {
                    ABOUT_PAGE.LEADERSHIP_INFORMATION.map(person => {
                        return <PersonCard id={ABOUT_PAGE.LEADERSHIP_INFORMATION.indexOf(person)}{...person}></PersonCard>
                    })
                }
            </div>

        </div>

    );
}

export default About;