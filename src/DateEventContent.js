/**
 * DateEventContent is for rendering the inner content of an event
 */

import React from 'react';

function DateEventContent(props) {
	return (
		<div>
			<b>
				{props.fa_icon ? <i class={"fas fa-fw " + props.fa_icon} style={{'padding-right' : '2em'}}></i> : null}
				{props.name}
			</b><br/>
			{props.time}, {props.location}
		</div>
	);
}

export default DateEventContent;
