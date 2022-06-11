/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';
import XR_CONSTANTS from '../XR_CONSTANTS';

function Lab() {

    const status = "closed";

    return (
        
        <div id="Page">

            {/* Header */}
            <div id="header">
                <img class="background-svg" src="svg/header-background.svg"/>

                {/* Nav bar */}
                <Navbar />

                {/* Title */}
                <div class="horizontal-flex-container">

                    {/* TODO: Replace with original image or image that we have the right to use */}
                    <img id="header-logo" src="images/av-williams.png" alt="A.V. Williams Building"/>
                    <div>
                        <img id="header-text" src={`svg/lab-${status}.svg`} alt={`Our lab is currently ${status}`}/>
                        {
                            XR_CONSTANTS.LAB_ADDRESS.map(line => {
                                return <h3>{line}</h3>
                            })
                        }
                    </div>
                </div>

            </div>

            <div class="section"></div>

        </div>

    );
}

export default Lab;