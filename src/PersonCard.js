/**
 * Definition of the PersonCard component, which generates a view for a person in the club.
 */

import React from 'react';

function PersonCard(props) {
	return (
		<div class="card z-depth-3">
			<div class="card-content" style={{'height' : '135px'}}>
				<span class="card-title center">{props.name}</span>
				<p class="center">{props.title}</p>
			</div>
			<div class="card-action" style={{'overflow' : 'hidden', 'white-space' : 'nowrap'}}>
				{
					// If there are no additional items, put an invisible icon to give the right height
					Object.keys(props).length == 2 ? <i style={{opacity : 0}} class="fab fa-linkedin small grey-text text-darken-3"></i> : null
				}
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
					props.web2 ? <a href={props.web2} target="_blank"><i class="far fa-window-maximize small grey-text text-darken-3"></i></a> : null
				}
				{
					props.mail ? <a href={props.mail} target="_blank"><i class="fas fa-envelope small grey-text text-darken-3"></i></a> : null
				}
				{
					props.twitter ? <a href={props.twitter} target="_blank"><i class="fab fa-twitter-square small grey-text text-darken-3"></i></a> : null
				}
			</div>
		</div>
	);
}

export default PersonCard;
