/**
 * This file contains constants used for the xr club website.
 * In the future when we add more involved features to the site this information may be moved to a database.
 */

module.exports = Object.freeze({
	
	FLASH_ITEMS : [
	],

	TERPLINK_STR : 'https://terplink.umd.edu/organization/xr-club/',
	EMAIL_STR : 'mailto:umd.xr.club@gmail.com',
	DISCORD_STR : 'https://discord.com/invite/KBx8mF6/',
	LINKEDIN_STR: 'https://www.linkedin.com/groups/8981512/',
	FACEBOOK_STR : 'https://www.facebook.com/groups/umd.xr.club/',
	TWITTER_STR : 'https://twitter.com/umdxrclub/',

	ABOUT_US_STR : 'The XR Club was established to create an environment in which UMD students interested in augmented' + 
	' and virtual reality application development can collaborate with like-minded individuals and gain access to' + 
	' cutting-edge hardware and software tools. In addition to providing access to physical resources, a primary mission of the' +
	' club is providing the campus community with educational resources in augmented and virtual reality development through' + 
	' club events and hackathons.',

	// Information about members of the xr club leadership.
	LEADERSHIP_INFORMATION : [
		{
			'name' : 'Sahil Mayenkar',
			'title' : 'President',
			'github' : 'https://github.com/SahilMayenkar',
			'linkedin' : 'https://www.linkedin.com/in/sahil-mayenkar/',
		},
		{
			'name' : 'Irene Li',
			'title' : 'Vice President',
			'linkedin' : 'https://www.linkedin.com/in/irene-li-5a33a4147/',
		},
		{
			'name' : 'Anders Julin',
			'title' : 'Treasurer',
			'linkedin' : 'https://www.linkedin.com/in/andersjulin',
		},
		{
			'name' : 'Jordan Woo',
			'title' : 'Lead Mentor',
			'linkedin' : 'https://www.linkedin.com/in/minersail/',
			'github' : 'https://github.com/minersail',
		},
		{
			'name' : 'Matt Graber',
			'title' : 'XR Mentor',
			'github' : 'https://github.com/grabermtw',
			'linkedin' : 'https://www.linkedin.com/in/matthew-william-graber-umd/',
			'web' : 'https://devpost.com/mgraber1',
		},
		{
			'name' : 'John Ball',
			'title' : 'XR Mentor',
			'linkedin' : 'https://www.linkedin.com/in/john-ball-337231186/',
			'web' : 'https://devpost.com/jlball',
			'web2' : 'https://jlballportfolio.wordpress.com/',
		},
		{
			'name' : 'Jesse Parreira',
			'title' : '3D Design Mentor, Snapchat Lens Studio Expert',
			'linkedin' : 'https://www.linkedin.com/in/jesse-parreira-48aa44163/',
			'twitter' : 'https://twitter.com/VeryNiceJokes',
		},
		{
			'name' : 'James Biggins',
			'title' : 'XR Mentor',
			'web' : 'https://jabiggins.wixsite.com/website',
			'linkedin' : 'https://www.linkedin.com/in/jbigginscs/',
		},
		{
			'name' : 'Omer Bowman',
			'title' : 'XR Mentor',
			'linkedin' : 'https://www.linkedin.com/in/omer-bowman/',
			'web' : 'https://mechanicallinguistics.wordpress.com',
		},
		{
			'name' : 'Arun Kumar',
			'title' : 'XR Mentor',
			'linkedin' : 'https://www.linkedin.com/in/arun-kumar-209a02125/',
		},
		{
			'name' : 'Sharon Zheng',
			'title' : 'XR Mentor',
		}
	],
	
	// Information about the xr club's projects. Horizontal images with a 2/1 aspect ratio are the best.
	PROJECTS_INFORMATION : [
		{
			'name' : 'Virtual Reality Real Time Strategy Game',
			'description' : 'With this project we are creating a real time strategy (RTS) game which will be played in virtual reality (VR). We hope to take advantage of the great immersion and unique control scheme of VR to create a unique RTS experience.',
			'github' : 'https://github.com/umdxrclub/vr-rts-project',
			'image' : 'rts-project-card-image.jpg'
		},
		{
			'name' : 'Augmented Reality Storybook',
			'description' : 'Turns regular storybooks/comic strip panels into AR/VR products. Goal of this project is to help encourage reading while also making it interactable, especially for young children.',
			'github' : 'https://github.com/ogennaumeozulu/ARStorybook',
			'image' : 'storybook-project-card-image.jpg',
		},
	],

	// Information about XR Club events throughout the semester
	// fa_icon should be a valid font-awesome icon name, don't include an fa_icon entry if you don't want an icon
	EVENTS_INFORMATION : [
		{
			'name' : 'Fall 2020 Virtual Kickoff Event',
			'date' : new Date(2020, 8, 18),
			'time' : '5:00pm - 6:15pm',
			'location' : 'Online via Zoom',
			'fa_icon' : 'fa-bullhorn',
			'url' : 'https://umd.zoom.us/j/92120507560',
		},
		{
			'name' : 'Setting Up Your XR Development Environment Workshop',
			'date' : new Date(2020, 8, 24),
			'time' : '5:00pm - 6:00pm',
			'location' : 'Online via Zoom',
			'fa_icon' : 'fa-flask',
			'url' : 'https://umd.zoom.us/j/92618293585',
		},
		{
			'name' : 'Intro to Unity Workshop ft. the Karting Microgame',
			'date' : new Date(2020, 8, 29),
			'time' : '5:00pm - 6:00pm',
			'location' : 'Online via Zoom',
			'fa_icon' : 'fa-flask',
			'url' : 'https://umd.zoom.us/j/98291412469',
		},
		{
			'name' : 'Social VR Chill Session',
			'date' : new Date(2020, 9, 2),
			'time' : '7:00pm - 7:30pm',
			'location' : 'Online via AltspaceVR',
			'fa_icon' : 'fa-users',
			'url' : 'https://account.altvr.com/events/1571220281840632151',
		},
		{
			'name' : 'echoAR: How to Build a Cloud-Connected AR/VR App in 15 Minutes or Less',
			'date' : new Date(2020, 9, 15),
			'time' : '5:00pm - 5:45pm',
			'location' : 'Online via Google Meet',
			'fa_icon' : 'fa-flask',
			'url' : 'https://meet.google.com/wjf-dmpt-ueo',
		}
	],
});
