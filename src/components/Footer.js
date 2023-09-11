/**
 * Definition of the Footer component, which contains contact information and a list of pages on the website.
 */

import '../App.css';
import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { FOOTER, LINKS } from '../XR_CONSTANTS';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ReactMarkdown from 'react-markdown';

function Footer () {

    const getCurrentYear = () => {
        return new Date().getFullYear(); 
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0)    
    }

    return (
        <div id="Footer">

            <img className="background-svg" src="svg/footer-background.svg" alt=""/>

            <div className="section">

                {/* Get Involved */}
                <a id="get-involved"/>
                <div id="footer-section-1">
                    <div className="horizontal-flex-container">
                        <img id="get-involved-img" src="svg/get-involved.svg" alt="Get Involved"/>
                        
                        {/* Discord and TerpLink */}
                        <div id="join-links">
                            <a href={LINKS.TERPLINK_STR} target="_blank" rel="noopener noreferrer" className="underline">
                                <img src="svg/link.svg" alt=""/> Join our TerpLink
                            </a>
                            <a href={LINKS.DISCORD_STR} target="_blank" rel="noopener noreferrer" className="underline">
                               <img src="svg/discord.svg" alt=""/> Join our Discord
                            </a>
                            <a href={LINKS.CALENDAR_STR} target="_blank" rel="noopener noreferrer" className="underline">
                               <img src="svg/calendar.svg" alt=""/> Add our Google calendar
                            </a>
                        </div>
                    </div>
                    <div id="get-involved-str"><ReactMarkdown children={FOOTER.GET_INVOLVED_STR} linkTarget="_blank"></ReactMarkdown></div>
                    <HashLink to="#top" id="back-to-top">↑ Back to top</HashLink>
                </div>

                {/* Website footer */}
                <div id="footer-section-2" className="horizontal-flex-container">
                    <img id="footer-logo" src="images/XR_Club_Logo_with_Outer_Circle.png" alt="XR Club logo"/>
                    <div id="footer-info">
                        <h4>XR Club</h4>
                        <p>University of Maryland, College Park</p>

                        {/* Hidden in mobile view */}
                        <SocialLinks id="social-icons-1"></SocialLinks>
                        <a href={LINKS.ICXR_STR} target="_blank" rel="noopener noreferrer">
                            <img src="images/ICXR-Member-Transparent-White.png" alt="a member of ICXR"
                            style={{width: "200px", marginTop: "4vh"}} />
                        </a>

                    </div>

                    {/* Page List */}
                    <div id="footer-pages">
                        <p><strong>Pages</strong></p>
                        <Link to="/" className="footer-link underline" onClick={scrollToTop}>Home</Link>
                        <Link to="/about" className="footer-link underline" onClick={scrollToTop}>About</Link>
                        <Link to="/lab" className="footer-link underline" onClick={scrollToTop}>Lab</Link>
                        <Link to="/projects" className="footer-link underline" onClick={scrollToTop}>Projects</Link>
                        {/*<Link to="/donate" className="footer-link underline" onClick={scrollToTop}>Donate</Link> */}
                    </div>
                    <div id="footer-community">
                        <p><strong>Community</strong></p>
                        <Link to="/news" className="footer-link underline" onClick={scrollToTop}>News</Link>
                        <Link to="/events" className="footer-link underline" onClick={scrollToTop}>Events</Link>
                        <a href={LINKS.TERPLINK_STR} target="_blank" 
                            className="footer-link underline">TerpLink</a>
                        <a href={LINKS.DISCORD_STR} target="_blank" 
                            className="footer-link underline">Discord</a>

                    </div>
                </div>

                {/* Hidden in desktop view */}
                <SocialLinks id="social-icons-2"></SocialLinks>
                <p id="copyright">© {getCurrentYear()} XR Club, College Park, MD</p>
            </div>
        </div>
    );
}

export default Footer;