/**
 * Definition of the PersonCard component, which generates a view for a person in the club.
 */

import React from 'react';

function PersonCard(props) {
	return (
		<div class="card z-depth-3">
			<div class="card-content">
				<span class="card-title center">{props.name}</span>
				<p class="center">{props.title}</p>
			</div>
			<div class="card-action">
				{
					props.linkedin ? <a href={props.linkedin} target="_blank"><i class="fab fa-linkedin small grey-text text-darken-3"></i></a> : null
				}
				{
					props.github ? <a href={props.github} target="_blank"><i class="fab fa-github small grey-text text-darken-3"></i></a> : null
				}
				{
					props.web ? <a href={props.web} target="_blank"><i class="far fa-window-maximize small grey-text text-darken-3"></i></a> : null
				}
				{
					props.mail ? <a href={props.mail} target="_blank"><i class="fas fa-envelope small grey-text text-darken-3"></i></a> : null
				}
			</div>
		</div>
	);
}

export default PersonCard;
