/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';
import Navbar from '../components/Navbar';
import ItemCard from '../components/ItemCard';
import { DONATION_PAGE } from '../XR_CONSTANTS';

function Donate() {

    document.title = "Donate | XR Club at UMD"

    if (window.location.href.indexOf("localhost") == -1) {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'donate', 
        });
    }

    const goalPercent = DONATION_PAGE.DONATION_GOAL == 0 ? 0 :
        Math.round((DONATION_PAGE.DONATION_PROGRESS / DONATION_PAGE.DONATION_GOAL) * 100);
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
                        <div className="donate-header">
                            <img id="header-text" src={`svg/support.svg`} alt="Support the XR Club"/>
                        </div>
                        <h3>Help us purchase immersive<br></br>
                        equipment for our lab and events</h3>
                    </div>
                </div>

            </div>

            <div id="donate-info">

                <div className="vertical-flexbox-container">
                    <h2 id="donate-header">DONATE</h2>
                    <ReactMarkdown children={DONATION_PAGE.DESCRIPTION} linkTarget="_blank"></ReactMarkdown>
                </div>

                <div>
                    <img src="images/venmo.jpg" id="venmo-qr"></img>
                </div>

            </div>
            <div className="spacer"></div>
            <div className="section">
                <a className="button red text-outline" href={DONATION_PAGE.VENMO_LINK} target="_blank" rel="noopener noreferrer">DONATE</a>
                <h4>VENMO: {DONATION_PAGE.VENMO}</h4>
            </div>
            <div className="section">
                {/* Progress Bar */}
                <div id="donation-progbar">
                    <div id="progress" style={{ width : 
                        goalPercent < 5 ? '5%' : goalPercent + '%' }}>
                        <p id="progress-percent">{goalPercent}%</p>
                    </div>
                </div>
                <div id="progbar-caption" className="horizontal-flex-container">
                    <div id="goal-progress">
                        <strong>${DONATION_PAGE.DONATION_PROGRESS}</strong>
                        <span className="light"> raised of ${DONATION_PAGE.DONATION_GOAL} goal</span>
                    </div>
                    <div id="num-donors">{DONATION_PAGE.NUM_DONORS} donors</div>
                </div>
            </div>

            <div className="spacer"></div>
            <div className="spacer"></div>

            <div className="section">
                <h4>BUY US A GAME!</h4>
                <p>Contribute to our catalog of Fun Friday experiences</p>

                {/* Wish list item cards */}
                <div className="horizontal-flex-container">
                    {
                        DONATION_PAGE.WISH_LIST_SMALL.map(item => {
                            return <ItemCard id={DONATION_PAGE.WISH_LIST_SMALL.indexOf(item)}{...item}></ItemCard>
                        })
                    }
                </div>
            </div>

            <div className="section">
                <h4>...OR SOMETHING MORE</h4>
                <p>Help us save for cutting-edge immersive equipment</p>

                {/* Wish list item cards */}
                <div className="horizontal-flex-container">
                    {
                        DONATION_PAGE.WISH_LIST.map(item => {
                            return <ItemCard id={DONATION_PAGE.WISH_LIST.indexOf(item)}{...item}></ItemCard>
                        })
                    }
                </div>
            </div>

            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="section">
                <h4>THANK YOU TO OUR DONORS</h4>
                <div id="donor-wall" className="horizontal-flex-container">
                    {
                        DONATION_PAGE.DONORS.length > 0 ? 
                            DONATION_PAGE.DONORS.map(item => {
                                return <span className="donor">{item}</span>
                            })
                        : 
                            <p className="italic">None yet. <a href={DONATION_PAGE.VENMO_LINK} target="_blank" rel="noopener noreferrer">Be the first!</a></p>
                    }
                </div>
            </div>

        </div>

    );
}

export default Donate;