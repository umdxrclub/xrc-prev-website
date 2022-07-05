/**
 * Definition of the ProjectCard component, which generates a view for a short project description.
 */

import React from 'react';

function Challenge(props) {

	return (
		<div className="card challenge-container">
			<a className="challenge-header" href={props.url} target="_blank" rel="noopener noreferrer">
				<img className="project-logo" src={`images/challenges/${props.image}`}></img>
				<h5>{props.name.toUpperCase()}</h5>
			</a>
			<div className="project-info">
				{
					props.description.map(paragraph => {
						return <p>{paragraph}</p>
					})
				}
				<div class="spacer"></div>
				{/*
				<a className={`button red text-outline`} href={props.url} 
					target="_blank" rel="noopener noreferrer">
					Learn more
				</a>
				*/}
			</div>
		</div>
	);
}

export default Challenge;
