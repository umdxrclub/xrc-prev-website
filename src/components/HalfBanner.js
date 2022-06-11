import React from 'react'
import Navbar from './Navbar'

function HalfBanner(props) {
    
    return (

        <div id="header" className="halfpage-banner">

            {/* Nav bar */}
            <Navbar />

            <img className="subpage-header" src={`svg/${props.headerImage}.svg`} alt={props.pageName}/>
            <p>{props.subheading}</p>

        </div>

    );

}

export default HalfBanner;