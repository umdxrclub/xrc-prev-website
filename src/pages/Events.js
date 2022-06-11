/**
 * Template component definition for a new page.
 */

import '../App.css';
import React from 'react';
import HalfBanner from '../components/HalfBanner';
import XR_CONSTANTS from '../XR_CONSTANTS';

function Events() {
    return (
        
        <div id="Events">
    
            <HalfBanner pageName="Events" headerImage="events" subheading={XR_CONSTANTS.PAGE_DESCRIPTIONS.EVENTS}/>

            <div class="section"></div>

        </div>

    );
}

export default Events;