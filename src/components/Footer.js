/**
 * Definition of the Footer component.
 */

import '../App.css';
import React from 'react';
import XR_CONSTANTS from '../XR_CONSTANTS';
import {Link} from 'react-router-dom';

function Footer () {

    const getCurrentYear = () => {
        return new Date().getFullYear(); 
    };

    return (
        <div id="Footer">
            <img class="background-svg" src="svg/footer-background.svg"/>

            <div class="section">

                {/* Get Involved */}
                <a id="get-involved"/>
                <div id="footer-section-1">
                    <div class="horizontal-flex-container">
                        <img id="get-involved-img" src="svg/get-involved.svg"/>
                        
                        {/* Discord and TerpLink */}
                        <div id="join-links">
                            <a href={XR_CONSTANTS.TERPLINK_STR} target="_blank" className="underline">
                                <img src="svg/link.svg"/> Join our TerpLink
                            </a>
                            <a href={XR_CONSTANTS.DISCORD_STR} target="_blank" className="underline">
                               <img src="svg/discord.svg"/> Join our Discord
                            </a>
                        </div>
                    </div>
                    <p id="get-involved-str">{XR_CONSTANTS.GET_INVOLVED_STR}</p>
                </div>

                {/* Website footer */}
                <div id="footer-section-2" class="horizontal-flex-container">
                    <img id="footer-logo" src="images/XR_Club_Logo_with_Outer_Circle.png"/>
                    <div id="footer-info">
                        <h4>XR Club</h4>
                        <p>University of Maryland, College Park</p>

                        {/* Social media links */}
                        <div id="social-icons" class="horizontal-flex-container flex-even">
                            <a href={XR_CONSTANTS.INSTAGRAM_STR} target="_blank">
                                <img src="svg/instagram.svg"/>
                            </a>
                            <a href={XR_CONSTANTS.TWITTER_STR} target="_blank">
                                <img src="svg/twitter.svg"/>
                            </a>
                            <a href={XR_CONSTANTS.FACEBOOK_STR} target="_blank">
                                <img src="svg/facebook.svg"/>
                            </a>
                            <a href={XR_CONSTANTS.LINKEDIN_STR} target="_blank">
                                <img src="svg/linkedin.svg"/>
                            </a>
                            <a href={XR_CONSTANTS.EMAIL_STR} target="_blank">
                                <img src="svg/email.svg"/>
                            </a>
                        </div>
                    </div>

                    {/* Page List */}
                    <div id="footer-pages">
                        <p><strong>Pages</strong></p>
                        <Link to="/" className="footer-link underline">Home</Link>
                        <Link to="/about/" className="footer-link underline">About</Link>
                        <Link to="/lab/" className="footer-link underline">Lab</Link>
                        <Link to="/projects/" className="footer-link underline">Projects</Link>
                    </div>
                    <div id="footer-community">
                        <p><strong>Community</strong></p>
                        <Link to="/events/" className="footer-link underline">Events</Link>
                        <a href={XR_CONSTANTS.TERPLINK_STR} target="_blank" 
                            className="footer-link underline">TerpLink</a>
                        <a href={XR_CONSTANTS.DISCORD_STR} target="_blank" 
                            className="footer-link underline">Discord</a>
                    </div>
                </div>

                <p id="copyright">© {getCurrentYear()} XR Club, College Park, MD</p>
            </div>
        </div>
    );
}

export default Footer;