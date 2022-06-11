/**
 * Definition of the component to render the home page of the website.
 */

import '../App.css';
import Navbar from '../components/Navbar.js';
import React from 'react';
import XR_CONSTANTS from '../XR_CONSTANTS';

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
                    <img id="header-logo" src="images/XR_Club_Logo_with_Outer_Circle.png"/>
                    <div>
                        <img id="header-text" src="svg/header.svg" alt="EXTENDED REALITY CLUB"/>
                        <h3>UNIVERSITY OF MARYLAND,<br></br>COLLEGE PARK</h3>
                    </div>
                </div>

            </div>

            {/* About */}
            <div id="home-about" class="section">

                <div class="background-image-relative">
                    <img id="home-headset-img" src="images/headset.png"/>
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
                    <div class="card pink-glass">
                        <img className="card-icon" src="svg/lab-icon.svg"/>
                        <p className="card-header">WORKSHOPS</p>
                        <p className="text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="button card-action-button white bg-cool-red">EXPLORE</div>
                    </div>
                    <div class="card purple-glass">
                        <img className="card-icon" src="svg/game-icon.svg"/>
                        <p className="card-header">GAME NIGHTS</p>
                        <p className="text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="button card-action-button white bg-purple">PLAY</div>
                    </div>
                    <div class="card pink-glass">
                        <img className="card-icon" src="svg/build-icon.svg"/>
                        <p className="card-header">PROJECTS</p>
                        <p className="text-align-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="button card-action-button white bg-cool-red">CONTRIBUTE</div>
                    </div>
                </div>
                <div className="button big white text-outline bg-black">UPCOMING EVENTS</div>
            </div>

        </div>
    );

}

export default Home;