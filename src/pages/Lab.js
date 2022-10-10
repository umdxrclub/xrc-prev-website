/**
 * Definition of the component to render the "lab" page of the website.
 */

import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';
import LabTour from '../components/LabTour';
import {LAB_PAGE} from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

// TODO: Live open/closed status like https://twitter.com/sandboxDoor

class Lab extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: "closed"
        };

        this.getLabStatus().then(res => {
            if (res.open || res.totalCheckedIn > 0) {
                this.setState({
                    status: "open"
                });
            }
            console.log("STATUS: " + this.state.status);
        })
        .catch(err => {
            console.log(err);
        });


    }

    componentDidMount() {

        document.title = "Lab | XR Club at UMD";

        if (window.location.href.indexOf("localhost") == -1) {
            const analytics = getAnalytics(app);
            logEvent(analytics, 'screen_view', {
                firebase_screen: 'lab', 
            });
        }

    }

    getLabStatus = async () => {
        const response = await fetch('https://umdxrc.figsware.net/api/v1/lab');
        const body = await response.json();

        if (body.success !== true) {
            throw Error(body.message);
        }

        return body.data;

    };


    render() {

        //const status = "closed";

        return (

            <div id="Lab">

                {/* Header */}
                <div id="header">
                    <img className="background-svg" src="svg/header-background.svg" alt=""/>

                    {/* Nav bar */}
                    <Navbar />

                    {/* Title */}
                    <div className="horizontal-flex-container">

                        <img id="header-logo" src={`images/av-williams-${this.state.status}.jpg`} alt="Exterior of the A.V. Williams Building"/>
                        <div>
                            <img id="header-text" src={`svg/lab-${this.state.status}.svg`} alt={`Our lab is currently ${this.state.status}`}/>
                            {
                                LAB_PAGE.LAB_ADDRESS.map(line => {
                                    return <h3>{line}</h3>
                                })
                            }
                        </div>
                    </div>

                </div>

                <div id="lab-description" className="padding-wide horizontal-flex-container">
                    <h2 id="lab-heading">THE XR LAB</h2>
                    <div id="lab-description-text">
                        <ReactMarkdown children={LAB_PAGE.DESCRIPTION} linkTarget="_blank"></ReactMarkdown>
                    </div>
                </div>

                <h2 className='padding-wide text-align-right'>TAKE A TOUR</h2>
                <LabTour />

            </div>

        );
    }
}

export default Lab;