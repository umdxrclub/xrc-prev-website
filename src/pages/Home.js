/**
 * Definition of the component to render the home page of the website.
 */

import '../App.css';
import Navbar from '../components/Navbar';
import HomeActionCard from '../components/HomeActionCard';
import React from 'react';
import {Link} from 'react-router-dom';
import { HOME_PAGE, LINKS } from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import DiscordIcon from '../svg/DiscordIcon';
import TerplinkIcon from '../svg/TerplinkIcon';
import Modal from "../components/Modal";
import app from '../Firebase';
import { render } from 'react-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            discordHover: false,
            terplinkHover: false,
        }

        this.discordHover = this.discordHover.bind(this);
        this.terplinkHover = this.terplinkHover.bind(this);
        this.discordLeave = this.discordLeave.bind(this);
        this.terplinkLeave = this.terplinkLeave.bind(this);
        this.openTerplink = this.openTerplink.bind(this);
    }

    componentDidMount() {
        document.title = "XR Club at UMD"

        if (window.location.href.indexOf("localhost") == -1) {
            const analytics = getAnalytics(app);
            logEvent(analytics, 'screen_view', {
                firebase_screen: 'home', 
            });
        }
    }

    discordHover() { 
        this.setState({discordHover: true});
    }

    terplinkHover() { 
        this.setState({terplinkHover: true});
    }

    discordLeave() { 
        this.setState({discordHover: false});
    }

    terplinkLeave() { 
        this.setState({terplinkHover: false});
    }

    openTerplink() {
        window.open(LINKS.TERPLINK_STR); 
    }

    render() {

        const white = "#ffffff";
        const discordBlue = "#5865F2";
        const xrRed = "#e61a31"

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
                            <h1 id="invisible-heading">EXTENDED REALITY CLUB</h1>
                            <img id="header-text" src="svg/header.svg" alt="EXTENDED REALITY CLUB"/>
                            <h3>UNIVERSITY OF MARYLAND, COLLEGE PARK</h3>
                            <div id="button-row" class="horizontal-flex-container">
                                <a href={LINKS.DISCORD_STR} target="blank" rel="noopener noreferrer" id="discord-button" class="button white" onMouseEnter={this.discordHover} onMouseLeave={this.discordLeave}>
                                    <DiscordIcon color={this.state.discordHover ? discordBlue : white}></DiscordIcon><span class="button-text">JOIN DISCORD</span>
                                </a>
                                <Modal content={HOME_PAGE.TERPLINK_ALERT} action={this.openTerplink} actionLabel="Continue to TerpLink">
                                    <a id="terplink-button" class="button white" onMouseEnter={this.terplinkHover} onMouseLeave={this.terplinkLeave}>
                                        <TerplinkIcon color={this.state.terplinkHover ? xrRed : white}></TerplinkIcon><span class="button-text">JOIN TERPLINK</span>
                                </a>
                                </Modal>
                            </div>
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


}

export default Home;