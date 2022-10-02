/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';
import Navbar from '../components/Navbar';
import { DONATION_PAGE } from '../XR_CONSTANTS';

function Donate() {

    document.title = "Donate | XR Club at UMD"

    if (window.location.href.indexOf("localhost") == -1) {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'donate', 
        });
    }

    const goalPercent = Math.round((DONATION_PAGE.DONATION_PROGRESS / DONATION_PAGE.DONATION_GOAL) * 100);
    //const goalPercent = 1;

    return (
        
        <div id="Donate">

            <div id="header">
                <img className="background-svg" src="svg/header-background.svg" alt=""/>

                {/* Nav bar */}
                <Navbar />

                {/* Title */}
                <div className="horizontal-flex-container">

                    <img id="header-logo" src="images/support.jpg" alt="XR Club members using AR and VR headsets"/>
                    <div>
                        <div class="donate-header">
                            <img id="header-text" src={`svg/support.svg`} alt="Support the XR Club"/>
                        </div>
                        <h3>Help us purchase immersive<br></br>
                        equipment for our lab and events</h3>
                    </div>
                </div>

            </div>

            <h2 id="donate-header">DONATE</h2>
            <div id="donate-info">

                <div className="vertical-flexbox-container">
                    <ReactMarkdown children={DONATION_PAGE.DESCRIPTION} linkTarget="_blank"></ReactMarkdown>
                </div>

                <div>
                    <img src="images/venmo.jpg" id="venmo-qr"></img>
                </div>

            </div>
            <div id="donate-section-2" class="section">
                <h4 class="underline">
                    <a href={DONATION_PAGE.VENMO_LINK} rel="noreferrer noopener" target="_blank">
                        VENMO: {DONATION_PAGE.VENMO}
                    </a>
                </h4>
                <div id="donation-progbar">
                    <div id="progress" style={{ width : 
                        goalPercent < 5 ? '5%' : goalPercent + '%' }}>
                        <p id="progress-percent">{goalPercent}%</p>
                    </div>
                </div>
                <div id="progbar-caption" class="horizontal-flex-container">
                    <div id="goal-progress">
                        <strong>${DONATION_PAGE.DONATION_PROGRESS}</strong>
                        <span class="light"> raised of ${DONATION_PAGE.DONATION_GOAL} goal</span>
                    </div>
                    <div id="num-donors">{DONATION_PAGE.NUM_DONORS} donors</div>
                </div>
            </div>

        </div>

    );
}

export default Donate;