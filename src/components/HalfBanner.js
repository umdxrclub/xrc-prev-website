import React from 'react'
import Navbar from './Navbar'

function HalfBanner(props) {
    
    return (

        <div id="header" className="halfpage-banner">
            <img className="background-svg" src="svg/halfbanner-background.svg"/>

            {/* Nav bar */}
            <Navbar />

            <div id="banner-content">
                <img className="subpage-header" src={`svg/${props.headerImage}.svg`} alt={props.pageName}/>
                <p>{props.subheading}</p>
            </div>

        </div>

    );

}

export default HalfBanner;