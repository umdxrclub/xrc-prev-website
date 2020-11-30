/**
 * Definition of the ContactRow component, which generates a view for a row of contact icons.
 */

import React from 'react';
import XR_CONSTANTS from './XR_CONSTANTS'

function ContactRow() {
	return (
		<div class="row center">
			<div class="col s2 offset-l3 l1">
				<a href={XR_CONSTANTS.TERPLINK_STR} target="_blank" rel="noopener noreferrer" class="tooltipped" data-position="top" data-tooltip="Join our Terplink Org">
					<i class="white-text small material-icons">web</i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.EMAIL_STR} target="_blank" rel="noopener noreferrer" class="tooltipped" data-position="top" data-tooltip="Send us an email">
					<i class="white-text small material-icons">mail</i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.DISCORD_STR} target="_blank" rel="noopener noreferrer" class="tooltipped" data-position="top" data-tooltip="Join our Discord server">
					<i class="white-text small fab fa-discord"></i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.LINKEDIN_STR} target="_blank" rel="noopener noreferrer" class="tooltipped" data-position="top" data-tooltip="Join our LinkedIn group">
					<i class="white-text small fab fa-linkedin"></i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.FACEBOOK_STR} target="_blank" rel="noopener noreferrer" class="tooltipped" data-position="top" data-tooltip="Join our Facebook group">
					<i class="white-text small fab fa-facebook"></i>
				</a>
			</div>
			<div class="col s2 l1">
				<a href={XR_CONSTANTS.TWITTER_STR} target="_blank" rel="noopener noreferrer" class="tooltipped" data-position="top" data-tooltip="Follow us on Twitter">
					<i class="white-text small fab fa-twitter"></i>
				</a>
			</div>
		</div>
	);
}

export default ContactRow;
