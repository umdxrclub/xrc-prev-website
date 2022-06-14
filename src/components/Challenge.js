/**
 * Definition of the ProjectCard component, which generates a view for a short project description.
 */

import React from 'react';

function Challenge(props) {

	/* Alternate alignments */
	const align = (props.id % 2 == 0) ? "left" : "right";
	
	return (
		<div className={`challenge-container horizontal-flex-container flex-${align}`}>
			<img className="project-logo" src={`images/challenges/${props.image}`}></img>
			<div className="project-info">
				<h5 className={`text-align-${align}`}>{props.name.toUpperCase()}</h5>
				{
					props.description.map(paragraph => {
						return <p className={`text-align-${align}`}>{paragraph}</p>
					})
				}
				<div class="spacer"></div>
				<a className={`button button-float-${align} red text-outline`} href={props.url} 
					target="_blank" rel="noopener noreferrer">
					Learn more
				</a>
			</div>
		</div>
	);
}

export default Challenge;
