/**
 * Definition of the ProjectCard component, which generates a view for a short project description.
 */

import React from 'react';

function ProjectCard(props) {
	return (
		<div className="card project-card purple-glass">
			<img className="card-header-image" src={`images/projects/${props.image}`}/>
			<div className="spacer"></div>
			<div className="card-header">{props.name.toUpperCase()}</div>
			<p className="text-align-center">{props.description}</p>
			<div id="card-icon-links">
				{
					props.github ? <a href={props.github} target="_blank" rel="noopener noreferrer"><img src="svg/github.svg" alt="GitHub"/></a> : null
				}
				{
					props.web ? <a href={props.web} target="_blank" rel="noopener noreferrer"><img src="svg/web.svg" alt="GitHub"/></a> : null
				}
			</div>
		</div>
	);
}

export default ProjectCard;
