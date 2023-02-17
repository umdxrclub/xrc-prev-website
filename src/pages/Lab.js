/**
 * Definition of the component to render the "lab" page of the website.
 */

import '../App.css';
import React, { startTransition } from 'react';
import LabTour from '../components/LabTour';
import LabHeader from '../components/LabHeader';
import {LAB_PAGE} from '../XR_CONSTANTS';
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

// TODO: Live open/closed status like https://twitter.com/sandboxDoor

class Lab extends React.Component {

    constructor(props) {
        super(props);
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

    render() {

        return (

            <div id="Lab">

                <LabHeader />

                <div id="lab-description" className="padding-wide horizontal-flex-container">
                    <h2 id="lab-heading">THE XR LAB</h2>
                    <div id="lab-description-text">
                        <ReactMarkdown children={LAB_PAGE.DESCRIPTION} linkTarget="_blank"></ReactMarkdown>
                    </div>
                </div>

                <div id="lab-directions" className="padding-wide horizontal-flex-container">
                    <h2 id="directions-heading">HOW TO GET THERE</h2>
                    <div id="lab-description-text">
                        <h4>FROM A.V. WILLIAMS LOBBY</h4>
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.ELEVATORS} linkTarget="_blank"></ReactMarkdown>
                        <h4>FROM CSIC SKY BRIDGE</h4>
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.BRIDGE} linkTarget="_blank"></ReactMarkdown>
                        <a class="underline" href={LAB_PAGE.DIRECTIONS.MAP_URL} target="_blank">
                            <h4 id="lab-map-link" class="underline">A.V. WILLIAMS MAP</h4>
                        </a>
                        <h4>VIDEOS COMING SOON!</h4>
                    </div>
                </div>

                <h2 className='padding-wide text-align-right'>TAKE A TOUR</h2>
                <LabTour />

            </div>

        );
    }
}

export default Lab;