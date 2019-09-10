/**
 * This file contains constants used for the xr club website.
 * In the future when we add more involved features to the site this information may be moved to a database.
 */


module.exports = Object.freeze({

	SLACK_STR : '',
	FACEBOOK_STR : 'https://www.facebook.com/groups/umd.xr.club/',
	TERPLINK_STR : 'https://terplink.umd.edu/organization/xr-club',
	EMAIL_STR : 'mailto:umd.xr.club@gmail.com',

	// Information about members of the xr club leadership.
	LEADERSHIP_INFORMATION : [
		{
			'name' : 'Matt Graber',
			'title' : 'President',
			'linkedin' : '#'
		},
		{
			'name' : 'John Ball',
			'title' : 'Vice President',
			'linkedin' : '#'
		},
		{
			'name' : 'Jordan Woo',
			'title' : 'Lead Mentor',
			'linkedin' : '#',
			'github' : '#'
		},
		{
			'name' : 'Anders Julin',
			'title' : 'Treasurer',
			'linkedin' : '#',
			'github' : '#'
		},
		{
			'name' : 'Sahil Mayenkar',
			'title' : 'Lead Organizer of Reality Hacks',
			'linkedin' : '#',
			'github' : '#'
		},
	],
	
	// Information about the xr club's projects. Horizontal images with a 2/1 aspect ratio are the best.
	PROJECTS_INFORMATION : [
		{
			'name' : 'Virtual Reality Real Time Strategy Game',
			'description' : 'With this project we are creating a real time strategy (RTS) game which will be played in virtual reality (VR). We hope to take advantage of the great immersion and unique control scheme of VR to create a unique RTS experience.',
			'github' : 'https://github.com/umdxrclub/vr-rts-project',
			'image' : 'rts-project-card-image.png'
		},
		{
			'name' : 'Augmented Reality Storybook',
			'description' : 'Turns regular storybooks/comic strip panels into AR/VR products. Goal of this project is to help encourage reading while also making it interactable, especially for young children.',
			'github' : 'https://github.com/ogennaumeozulu/ARStorybook',
			'image' : 'storybook-project-card-image.png',
		},
	]
});
