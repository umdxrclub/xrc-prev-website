/**
 * Definition of the ProjectCard component, which generates a view for a short project description.
 */

import React from 'react';

function ProjectCard(props) {
	return (
		<div class={"card z-depth-3" + (props.image_is_vertical ? ' horizontal' : '')}>
			<div class="card-image">
				<img src={props.image}></img>
			</div>
			<div class="card-stacked">
				<div class="card-content">
					<span class="card-title center">{props.name}</span>
					<p class="center"><i>"{props.description}"</i></p>
				</div>
				<div class="card-action">
					{
						props.github ? <a href={props.github} target="_blank"><i class="fab fa-github small grey-text text-darken-3"></i></a> : null
					}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
