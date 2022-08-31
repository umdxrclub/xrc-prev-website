import React from 'react'
import { LINKS } from '../XR_CONSTANTS';

function SocialLinks(props) {
    
    return (

        <div id={props.id} className="social-icons horizontal-flex-container flex-even">
            <a href={LINKS.INSTAGRAM_STR} target="_blank">
                <img src="svg/instagram.svg" alt="Instagram"/>
            </a>
            <a href={LINKS.TWITTER_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/twitter.svg" alt="Twitter"/>
            </a>
            <a href={LINKS.FACEBOOK_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/facebook.svg" alt="Facebook"/>
            </a>
            <a href={LINKS.LINKEDIN_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/linkedin.svg" alt="LinkedIn"/>
            </a>
            <a href={LINKS.EMAIL_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/email.svg" alt="Email"/>
            </a>
            <a href={LINKS.YOUTUBE_STR} target="_blank" rel="noopener noreferrer">
                <img src="svg/youtube.svg" alt="YouTube"/>
            </a>
        </div>

    );

}

export default SocialLinks;