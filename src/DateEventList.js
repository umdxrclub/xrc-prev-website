/**
 * Definition of the DateEventList component, which generates a view for a list of events for a given date
 */

import React from 'react';

function DateEventList(props) {
	return (

		<ul class="collection">
			{
				props.events.map(event => {
					return (
						<li class="collection-item">
							<b>
								{event.fa_icon ? <i class={"fas fa-fw " + event.fa_icon} style={{'padding-right' : '2em'}}></i> : null}
								{event.name}
							</b><br/>
							{event.time}, {event.location}
						</li>
					)
				})
			}
		</ul>
	);
}

export default DateEventList;
