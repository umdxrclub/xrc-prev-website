/**
 * Definition of the PersonCard component, which generates a view for a person in the club.
 */

import React from 'react';

function PersonCard(props) {

	/* Alternate card colors */
	const color = (props.id % 2 == 0) ? "red" : "purple";

	const image = (props.image != undefined && props.image != "") ? "images/members/" + props.image : "images/XR_Club_Logo_with_Outer_Circle.png";

	return (
		<div className={`card member-card ${color}-glass`}>
			<img className="card-profile" src={image} alt={`Profile image of ${props.name}`}/>
			<div className="card-header">{props.name.toUpperCase()}</div>
			<p className="person-title">{props.title}</p>
			<div id="card-icon-links">
				{
					props.linkedin ? <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><img src="svg/linkedin.svg" alt="Linkedin"/></a> : null
				}
				{
					props.github ? <a href={props.github} target="_blank" rel="noopener noreferrer"><img src="svg/github.svg" alt="GitHub"/></a> : null
				}
				{
					props.web ? <a href={props.web} target="_blank" rel="noopener noreferrer"><img src="svg/web.svg" alt="Website"/></a> : null
				}
				{
					props.web2 ? <a href={props.web2} target="_blank" rel="noopener noreferrer"><img src="svg/web.svg" alt="Second website"/></a> : null
				}
				{
					props.mail ? <a href={props.mail} target="_blank" rel="noopener noreferrer"><img src="svg/email.svg" alt="Email"/></a> : null
				}
				{
					props.twitter ? <a href={props.twitter} target="_blank" rel="noopener noreferrer"><img src="svg/twitter.svg" alt="Twitter"/></a> : null
				}
				{
					props.instagram ? <a href={props.instagram} target="_blank" rel="noopener noreferrer"><img src="svg/instagram.svg" alt="Instagram"/></a> : null
				}
				{
					props.facebook ? <a href={props.facebook} target="_blank" rel="noopener noreferrer"><img src="svg/facebook.svg" alt="Facebook"/></a> : null
				}
			</div>
		</div>
	);
}

export default PersonCard;
