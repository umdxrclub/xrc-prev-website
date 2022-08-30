/**
 * Definition of the component to render the home page of the website.
 */

import '../App.css';
import Navbar from '../components/Navbar';
import HomeActionCard from '../components/HomeActionCard';
import React from 'react';
import {Link} from 'react-router-dom';
import { HOME_PAGE } from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

function Home() {

    document.title = "XR Club at UMD"

    if (window.location.href.indexOf("localhost") == -1) {
        const analytics = getAnalytics(app);
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'home', 
        });
    }

    return (
        <div id="Home">

            {/* Header */}
            <div id="header">
                <img className="background-svg" src="svg/header-background.svg" alt=""/>

                {/* Nav bar */}
                <Navbar />

                {/* Title */}
                <div className="horizontal-flex-container">
                    <img id="header-logo" src="images/XR_Club_Logo_with_Outer_Circle.png" alt="XR Club Logo"/>
                    <div>
                        <img id="header-text" src="svg/header.svg" alt="EXTENDED REALITY CLUB"/>
                        <h3>UNIVERSITY OF MARYLAND,</h3>
                        <h3>COLLEGE PARK</h3>
                    </div>
                </div>

            </div>

            {/* About */}
            <div id="home-about" className="section">

                <div className="background-image-relative">
                    <img id="home-headset-img" src="images/headset.png" alt="Virtual reality headset" title="Photo by Remy Gieling on Unsplash"/>
                </div>
                <div className="vertical-flexbox-container">
                    <h2>MISSION</h2>
                    <ReactMarkdown children={HOME_PAGE.MISSION} linkTarget="_blank"></ReactMarkdown>
                    <div className="spacer"></div>
                    <Link to="/about" className="button red text-outline">LEARN MORE</Link>
                </div>

            </div>

            {/* Video */}
            <iframe title="XR Terrestrial Video" src="https://player.vimeo.com/video/379079878?title=0&portrait=0" id="video"/>
            <script src="https://player.vimeo.com/api/player.js"></script>

            {/* Events */}
            <div id="home-events" className="section">
                <div className="padding-wide">
                    <h2 className="text-align-right">EVENTS</h2>
                </div>
                <div className="padding-small horizontal-flex-container flex-even">
                    {
                        HOME_PAGE.HOME_ACTION_CARDS.map(action_card => {
                            return <HomeActionCard id={HOME_PAGE.HOME_ACTION_CARDS.indexOf(action_card)}
                                {...action_card}></HomeActionCard>
                        })
                    }
                </div>
            </div>

        </div>
    );

}

export default Home;