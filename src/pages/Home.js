/**
 * Definition of the component to render the home page of the website.
 */

import '../App.css';
import Navbar from '../components/Navbar';
import HomeActionCard from '../components/HomeActionCard';
import React from 'react';
import {Link} from 'react-router-dom';
import XR_CONSTANTS, { HOME_ACTION_CARDS } from '../XR_CONSTANTS';

function Home() {

    return (
        <div id="Home">

            {/* Header */}
            <div id="header">
                <img class="background-svg" src="svg/header-background.svg"/>

                {/* Nav bar */}
                <Navbar />

                {/* Title */}
                <div class="horizontal-flex-container">
                    <img id="header-logo" src="images/XR_Club_Logo_with_Outer_Circle.png" alt="XR Club Logo"/>
                    <div>
                        <img id="header-text" src="svg/header.svg" alt="EXTENDED REALITY CLUB"/>
                        <h3>UNIVERSITY OF MARYLAND,<br></br>COLLEGE PARK</h3>
                    </div>
                </div>

            </div>

            {/* About */}
            <div id="home-about" class="section">

                <div class="background-image-relative">
                    <img id="home-headset-img" src="images/headset.png" alt="Virtual reality headset" title="Photo by Remy Gieling on Unsplash"/>
                </div>
                <div class="vertical-flexbox-container">
                    <h2>ABOUT</h2>
                    <p>{XR_CONSTANTS.ABOUT_US_STR}</p>
                    <div class="spacer"></div>
                    <a class="button red text-outline">LEARN MORE</a>
                </div>

            </div>

            {/* Video */}
            <div class="section">
                <iframe title="XR Terrestrial Video" src="https://player.vimeo.com/video/379079878?title=0&portrait=0" id="video"/>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>

            {/* Events */}
            <div id="home-events" class="section">
                <div className="padding-wide">
                    <h2 className="text-align-right">EVENTS</h2>
                </div>
                <div className="padding-small horizontal-flex-container flex-even">
                    {
                        XR_CONSTANTS.HOME_ACTION_CARDS.map(action_card => {
                            return <HomeActionCard id={HOME_ACTION_CARDS.indexOf(action_card)}
                                {...action_card}></HomeActionCard>
                        })
                    }
                </div>
                <Link to="/events" className="button big white text-outline bg-black">UPCOMING EVENTS</Link>
            </div>

        </div>
    );

}

export default Home;