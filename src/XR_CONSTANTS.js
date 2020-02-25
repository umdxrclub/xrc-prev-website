/**
 * This file contains constants used for the xr club website.
 * In the future when we add more involved features to the site this information may be moved to a database.
 */

module.exports = Object.freeze({
	
	FLASH_ITEMS : [
	],

	SLACK_STR : 'https://join.slack.com/t/xr-club/shared_invite/enQtNDQ0NTMyODAwMDUyLWUyYmUzNWU3OGNjNDY2ZWNlMTlhYW' + 
	'QwZDRiYTAzZjdhNzQ4NjI0YzczZmM1NWRhZjU2MzEyOGQ3NzQ2NGRjNDg',
	FACEBOOK_STR : 'https://www.facebook.com/groups/umd.xr.club/',
	TERPLINK_STR : 'https://terplink.umd.edu/organization/xr-club',
	EMAIL_STR : 'mailto:umd.xr.club@gmail.com',

	ABOUT_US_STR : 'The XR Club was established to create an environment in which UMD students interested in augmented' + 
	' and virtual reality application development can collaborate with like-minded individuals and gain access to' + 
	' cutting-edge hardware and software tools. In addition to providing access to physical resources, a primary mission of the' +
	' club is providing the campus community with educational resources in augmented and virtual reality development through' + 
	' club events and hackathons.',

	// Information about members of the xr club leadership.
	LEADERSHIP_INFORMATION : [
		{
			'name' : 'Matt Graber',
			'title' : 'President',
			'github' : 'https://github.com/grabermtw',
			'linkedin' : 'https://www.linkedin.com/in/matthew-william-graber-umd/',
			'web' : 'https://devpost.com/mgraber1',
		},
		{
			'name' : 'John Ball',
			'title' : 'Vice President',
			'linkedin' : 'https://www.linkedin.com/in/john-ball-337231186/',
			'web' : 'https://devpost.com/jlball',
			'web2' : 'https://jlballportfolio.wordpress.com/',
		},
		{
			'name' : 'Jordan Woo',
			'title' : 'Lead Mentor',
			'linkedin' : 'https://www.linkedin.com/in/minersail/',
			'github' : 'https://github.com/minersail',
		},
		{
			'name' : 'Anders Julin',
			'title' : 'Treasurer',
			'linkedin' : 'https://www.linkedin.com/in/andersjulin',
		},
		{
			'name' : 'Sahil Mayenkar',
			'title' : 'Lead Organizer of RealityHacks, XR Mentor',
			'github' : 'https://github.com/SahilMayenkar',
			'linkedin' : 'https://www.linkedin.com/in/sahil-mayenkar/',
		},
		{
			'name' : 'Jesse Parreira',
			'title' : '3D Design Mentor',
			'linkedin' : 'https://www.linkedin.com/in/jesse-parreira-48aa44163/',
			'twitter' : 'https://twitter.com/VeryNiceJokes',
		},
		{
			'name' : 'Paul Armstrong',
			'title' : 'Web Developer, XR Mentor',
			'linkedin' : 'https://www.linkedin.com/in/paul-armstrong-650979159/',
			'github' : 'https://github.com/paulbarmstrong',
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
			'name' : 'Irene Li',
			'title' : 'XR Mentor',
			'linkedin' : 'https://www.linkedin.com/in/irene-li-5a33a4147/',
		},
		{
			'name' : 'Sharon Zheng',
			'title' : 'XR Mentor',
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
	],

	// Information about XR Club events throughout the semester
	// fa_icon should be a valid font-awesome icon name, don't include an fa_icon entry if you don't want an icon
	EVENTS_INFORMATION : [
		{
			'name' : 'Spring Kickoff Meeting (with Pizza!)',
			'date' : new Date(2020, 1, 7),
			'time' : '5:00pm - 6:30pm',
			'location' : 'AVW 4176',
			'fa_icon' : 'fa-flask',
		},
		{
			'name' : 'Intro to VR Workshop',
			'date' : new Date(2020, 1, 12),
			'time' : '5:00pm - 6:00pm',
			'location' : 'AVW 4176',
			'fa_icon' : 'fa-flask',
		},
		{
			'name' : 'Budget Beat Saber Workshop I',
			'date' : new Date(2020, 1, 20),
			'time' : '5:00pm - 6:00pm',
			'location' : 'AVW 4176',
			'fa_icon' : 'fa-flask',
		},
		{
			'name' : 'Budget Beat Saber Workshop I or II',
			'date' : new Date(2020, 1, 28),
			'time' : '5:00pm - 6:00pm',
			'location' : 'AVW 4176',
			'fa_icon' : 'fa-flask',
		},
	],
});
