/**
 * Definition of the FlashItem component, which generates a view for a little message.
 */

import React from 'react';

function FlashItem(props) {
	return props.url ? <a href={props.url} target="_blank">{makeCard(props)}</a> : makeCard(props);
}

function makeCard(props) {
	return (
		<div class="card blue darken-3 white-text" style={{'opacity' : '0.8'}}>
			<div class="card-content valign-wrapper">
				<i class="small material-icons" style={{'padding-right' : '20px'}}>new_releases</i>
				<span class="center">{props.message}</span>
			</div>
		</div>
	);
}

export default FlashItem;
