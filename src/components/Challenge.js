/**
 * Definition of the ProjectCard component, which generates a view for a short project description.
 */

import React from 'react';

function Challenge(props) {

	return (
		<a className="challenge-container" href={props.url} target="_blank" rel="noopener noreferrer">
			<div className="challenge-header">
				<img className="challenge-logo" src={`images/challenges/${props.image}`}></img>
			</div>
			<div className="project-info">
				<h5>{props.name.toUpperCase()}</h5>
				<p className="challenge-status">{props.status.toUpperCase()}</p>
				{
					props.description.map(paragraph => {
						return <p>{paragraph}</p>
					})
				}
				<p className="years-participated">YEARS {props.action}: {props.years_participated}</p>
			</div>
			<img className="challenge-arrow" src="svg/right-arrow.svg"></img>
		</a>
	);
}

export default Challenge;
