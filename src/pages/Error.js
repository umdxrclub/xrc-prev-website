/**
 * Component definition to render the "News" page of the website.
 */

import '../App.css';
import React, { startTransition } from 'react';
import HalfBanner from '../components/HalfBanner';
import { ERROR_PAGE } from '../XR_CONSTANTS';
import {Link} from 'react-router-dom';
import TorusText from '../components/TorusText';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from '../Firebase';

function Error() {

    startTransition(() => {
        document.title = "404 | XR Club at UMD";

        if (window.location.href.indexOf("localhost") == -1) {
            const analytics = getAnalytics(app);
            logEvent(analytics, 'screen_view', {
                firebase_screen: '404', 
            });
        };

    });

    return (
        
        <div id="Error">

            <HalfBanner pageName="Error" headerImage="404" subheading={ERROR_PAGE.DESCRIPTION}/>
            <TorusText image="not_found.png"/>
            <p className="text-align-center">Go back <Link to="/">home</Link></p>

        </div>

    );
}

export default Error;