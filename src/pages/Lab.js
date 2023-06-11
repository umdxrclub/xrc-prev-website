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

        if (window.location.hash) {
            const id = window.location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element != undefined) {
                element.scrollIntoView();
            }
        }

    }

    render() {

        return (

            <div id="Lab">

                <LabHeader />

                <div id="lab-description" className="padding-wide horizontal-flex-container lab-section">
                    <h2>THE XR LAB</h2>
                    <div id="lab-description-text">
                        <ReactMarkdown children={LAB_PAGE.DESCRIPTION} linkTarget="_blank"></ReactMarkdown>
                    </div>
                </div>

                <div id="lab-directions" className="padding-wide horizontal-flex-container lab-section">
                    <h2>HOW TO GET THERE</h2>
                    <div id="lab-description-text">
                        <h4>FROM A.V. WILLIAMS LOBBY</h4>
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.ELEVATORS} linkTarget="_blank"></ReactMarkdown>
                        <h4>FROM COMPUTER SCIENCE INSTRUCTIONAL CENTER</h4>
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.BRIDGE} linkTarget="_blank"></ReactMarkdown>
                        <a class="underline" href={LAB_PAGE.DIRECTIONS.MAP_URL} target="_blank">
                            <h4 id="lab-map-link" class="underline">A.V. WILLIAMS MAP</h4>
                        </a>
                        <h4>VIDEOS COMING SOON!</h4>
                    </div>
                </div>

                <h2 className='padding-wide text-align-right'>TAKE A TOUR</h2>
                <LabTour />

                <h2 className='padding-wide text-align-left'>OTHER FACILITIES</h2>

                <a id="vis-studio"></a>
                <div id="facilities-directions" className="padding-wide horizontal-flex-container lab-section">
                    <h3>VISUALIZATION STUDIO (3258 A.V. Williams)</h3>
                    <div id="lab-description-text">
                        <h4>FROM A.V. WILLIAMS LOBBY</h4>
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.VISLAB_ELEVATORS} linkTarget="_blank"></ReactMarkdown>
                        <h4>FROM COMPUTER SCIENCE INSTRUCTIONAL CENTER</h4>
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.VISLAB_BRIDGE} linkTarget="_blank"></ReactMarkdown>
                        <img src="images/vislab.jpg" alt="XR Club members in the visualization lab in A.V. Williams"></img>
                    </div>
                </div>

                <a id="imd-lab"></a>
                <div id="facilities-directions" className="padding-wide horizontal-flex-container lab-section">
                    <h3>IMMERSIVE MEDIA DESIGN LAB (0110 IRIBE)</h3>
                    <div id="lab-description-text">
                        <ReactMarkdown children={LAB_PAGE.DIRECTIONS.IMD_LAB} linkTarget="_blank"></ReactMarkdown>
                        <img src="images/imdlab.jpg" alt="XR Club members in the visualization lab in A.V. Williams"></img>
                    </div>
                </div>

            </div>

        );
    }
}

export default Lab;