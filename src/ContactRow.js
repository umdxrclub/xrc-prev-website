/**
 * Definition of the ContactRow component, which generates a view for a row of contact icons.
 */

import React from 'react';
import XR_CONSTANTS from './XR_CONSTANTS'

function ContactRow() {
	return (
		<div class="row center">
			<div class="col offset-s2 s2 offset-l4 l1">
				<a href={XR_CONSTANTS.TERPLINK_STR} target="_blank" class="tooltipped" data-position="top" data-tooltip="Join our Terplink Org">
					<i class="white-text small material-icons">web</i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.SLACK_STR} target="_blank" class="tooltipped" data-position="top" data-tooltip="Join our Slack">
					<i class="white-text small fab fa-slack"></i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.FACEBOOK_STR} target="_blank" class="tooltipped" data-position="top" data-tooltip="Join our Facebook group">
					<i class="white-text small fab fa-facebook"></i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.EMAIL_STR} target="_blank" class="tooltipped" data-position="top" data-tooltip="Send us an email">
					<i class="white-text small material-icons">mail</i>
				</a>
			</div>
		</div>
	);
}

export default ContactRow;
