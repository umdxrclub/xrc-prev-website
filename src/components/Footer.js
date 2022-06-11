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
                <a id="get-involved"/>
                <div id="footer-section-1">
                    <div class="horizontal-flex-container">
                        <img id="get-involved-img" src="svg/get-involved.svg"/>
                        <div id="join-links">
                            <a href="https://terplink.umd.edu/organization/xr-club/" target="_blank" className="underline">
                                <img src="svg/link.svg"/> Join our TerpLink
                            </a>
                            <a href="https://discord.gg/qsCfF8BgPK" target="_blank" className="underline">
                               <img src="svg/discord.svg"/> Join our Discord
                            </a>
                        </div>
                    </div>
                    <p id="get-involved-str">{XR_CONSTANTS.GET_INVOLVED_STR}</p>
                </div>
                <div id="footer-section-2" class="horizontal-flex-container">
                    <img id="footer-logo" src="images/XR_Club_Logo_with_Outer_Circle.png"/>
                    <div id="footer-info">
                        <h4>XR Club</h4>
                        <p>University of Maryland, College Park</p>
                        <div id="social-icons" class="horizontal-flex-container flex-even">
                            <a href="https://www.instagram.com/umdxrclub/" target="_blank">
                                <img src="svg/instagram.svg"/>
                            </a>
                            <a href="https://www.twitter.com/umdxrclub/" target="_blank">
                                <img src="svg/twitter.svg"/>
                            </a>
                            <a href="https://www.facebook.com/groups/umd.xr.club/" target="_blank">
                                <img src="svg/facebook.svg"/>
                            </a>
                            <a href="https://www.linkedin.com/groups/8981512/" target="_blank">
                                <img src="svg/linkedin.svg"/>
                            </a>
                            <a href="mailto:umd.xr.club@gmail.com" target="_blank">
                                <img src="svg/email.svg"/>
                            </a>
                        </div>
                    </div>
                    <div id="footer-pages">
                        <p><strong>Pages</strong></p>
                        <Link to="/" className="footer-link underline">Home</Link>
                        <Link to="/" className="footer-link underline">About</Link>
                        <Link to="/" className="footer-link underline">Lab</Link>
                        <Link to="/" className="footer-link underline">Projects</Link>
                    </div>
                    <div id="footer-community">
                        <p><strong>Community</strong></p>
                        <Link to="/" className="footer-link underline">Events</Link>
                        <a href="https://terplink.umd.edu/organization/xr-club/" target="_blank" 
                            className="footer-link underline">TerpLink</a>
                        <a href="https://discord.gg/qsCfF8BgPK" target="_blank" 
                            className="footer-link underline">Discord</a>
                    </div>
                </div>
                <p id="copyright">© {getCurrentYear()} XR Club, College Park, MD</p>
            </div>
        </div>
    );
}

export default Footer;