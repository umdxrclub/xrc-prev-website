/**
 * Definition of the component to render the lab page of the website.
 */

import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';
import {LAB_PAGE} from '../XR_CONSTANTS';

function Lab() {

    const status = "closed";

    return (
        
        <div id="Lab">

            {/* Header */}
            <div id="header">
                <img className="background-svg" src="svg/header-background.svg"/>

                {/* Nav bar */}
                <Navbar />

                {/* Title */}
                <div className="horizontal-flex-container">

                    {/* TODO: Replace with original image or image that we have the right to use */}
                    <img id="header-logo" src="images/av-williams.png" alt="A.V. Williams Building"/>
                    <div>
                        <img id="header-text" src={`svg/lab-${status}.svg`} alt={`Our lab is currently ${status}`}/>
                        {
                            LAB_PAGE.LAB_ADDRESS.map(line => {
                                return <h3>{line}</h3>
                            })
                        }
                    </div>
                </div>

            </div>

            <div id="lab-description" className="padding-wide horizontal-flex-container">
                <h2 id="lab-heading">THE XR LAB</h2>
                <div id="lab-description-text">
                    {
                        LAB_PAGE.DESCRIPTION.map(paragraph => {
                            return <p>{paragraph}</p>
                        })
                    }
                </div>
            </div>

        </div>

    );
}

export default Lab;