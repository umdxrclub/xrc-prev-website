/**
 * Definition of the DateEventList component, which generates a view for a list of events for a given date
 */

import React from 'react';
import DateEventContent from "./DateEventContent";

function DateEventList(props) {
	return (
		<ul class="collection">
			{
				props.events.map(event => {
					if (event.url != null) {
						return <a href={event.url} class="collection-item blue-text">
							<DateEventContent {...event}/>
						</a>
					} else {
						return <li class="collection-item">
							<DateEventContent {...event}/>
						</li>
					}
				})
			}
		</ul>
	);
}

export default DateEventList;
