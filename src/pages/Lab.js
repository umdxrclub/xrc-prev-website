/**
 * Definition of the component to render the "lab" page of the website.
 */

import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';
import TorusText from '../components/TorusText';
import {LAB_PAGE} from '../XR_CONSTANTS';
import { Canvas } from "@react-three/fiber";
import { useLoader, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useState, useEffect, Suspense, useRef } from "react";
import sceneUrl from '../models/lab/lab.glb';
import { Html, useProgress } from '@react-three/drei'
import ReactMarkdown from 'react-markdown';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

// TODO: Live open/closed status like https://twitter.com/sandboxDoor

function LabScan() {

    const gltf = useLoader(GLTFLoader, sceneUrl);
    return (
        <>
        <primitive object={gltf.scene} position={[0, -0.5, 0.75]}></primitive>
        </>
    );
}

class Lab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "closed"
        }
    }

    componentDidMount() {
        document.title = "Lab | XR Club at UMD"

        if (window.location.href.indexOf("localhost") == -1) {
            const analytics = getAnalytics(app);
            logEvent(analytics, 'screen_view', {
                firebase_screen: 'lab', 
            });
        }
    }

    render() {

        const status = "closed";

        return (

            <div id="Lab">

                {/* Header */}
                <div id="header">
                    <img className="background-svg" src="svg/header-background.svg" alt=""/>

                    {/* Nav bar */}
                    <Navbar />

                    {/* Title */}
                    <div className="horizontal-flex-container">

                        {/* TODO: Replace with original image or image that we have the right to use */}
                        <img id="header-logo" src="images/av-williams.png" alt="Exterior of the A.V. Williams Building"/>
                        <div>
                            <img id="header-text" src={`svg/lab-${status}.svg`} alt={`Our lab is currently ${status}`}/>
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
                <div style={{ position: "relative", width: '100vw', height: '100vh'}}>
                    <Suspense fallback={<TorusText />}>
                        <Canvas adjustCamera camera={{ position: [0, 0, -3] }}>
                            <ambientLight />
                                <LabScan />
                                <OrbitControls
                                    enableZoom={false}
                                    enablePan={false}
                                    minPolarAngle={Math.PI / 2} 
                                    maxPolarAngle={2 * Math.PI / 3}
                                    />
                        </Canvas>
                    </Suspense>
                </div>

            </div>

        );
    }
}

export default Lab;