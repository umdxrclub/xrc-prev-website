/**
 * This file contains constants used for the xr club website.
 * In the future when we add more involved features to the site this information may be moved to a database.
 */

module.exports = Object.freeze({

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
			'name' : 'Jesse Parreira',
			'title' : '3D Design Mentor',
			'linkedin' : 'https://www.linkedin.com/in/jesse-parreira-48aa44163/',
			'twitter' : 'https://twitter.com/VeryNiceJokes',
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
			'name' : 'Unity Tutorial #1',
			'date' : 'Friday, September 20th',
			'time' : '5pm - 6pm',
			'location' : 'CSIC 3117',
			'fa_icon' : 'fa-graduation-cap',
		},
		{
			'name' : 'Game Night #1',
			'date' : 'Friday, September 20th',
			'time' : '6pm - 7:30pm',
			'location' : 'A.V. Williams 4176',
			'fa_icon' : 'fa-chess-rook',
		},
		{
			'name' : 'Unity Tutorial #2',
			'date' : 'Friday, September 27th',
			'time' : '5pm - 6pm',
			'location' : 'CSIC 3117',
			'fa_icon' : 'fa-graduation-cap',
		},
		{
			'name' : 'Unity Tutorial #3',
			'date' : 'Friday, October 4th',
			'time' : '5pm - 6pm',
			'location' : 'CSIC 3117',
			'fa_icon' : 'fa-graduation-cap',
			'terplink' : 'https://terplink.umd.edu/event/4998328',
		},
		{
			'name' : 'Open Lab Night',
			'date' : 'Friday, October 4th',
			'time' : '6pm - 7:30pm',
			'location' : 'A.V. Williams 4176',
			'fa_icon' : 'fa-flask',
			'terplink' : 'https://terplink.umd.edu/event/4998328',
		},
		{
			'name' : 'Game Night #2',
			'date' : 'Friday, October 11th',
			'time' : '6pm - 7:30pm',
			'location' : 'A.V. Williams 4176',
			'fa_icon' : 'fa-chess-rook',
		},
		{
			'name' : 'AR Tutorial',
			'date' : 'Friday, October 18th',
			'time' : 'Time TBD',
			'location' : 'Location TBD',
			'fa_icon' : 'fa-graduation-cap',
		},
		{
			'name' : 'VR Tutorial',
			'date' : 'Friday, October 18th',
			'time' : 'Time TBD',
			'location' : 'Location TBD',
			'fa_icon' : 'fa-graduation-cap',
		},
		/* These are only tentative
		{
			'name' : 'Open Lab Night',
			'date' : 'Friday, October 25th',
			'time' : 'Time TBD',
			'location' : 'A.V. Williams 4176',
			'fa_icon' : 'fa-flask',
		},
		{
			'name' : 'Game Night #3',
			'date' : 'Friday, November 1st',
			'time' : 'Time TBD',
			'location' : 'A.V. Williams 4176',
			'fa_icon' : 'fa-chess-rook',
		},
		{
			'name' : 'Blender Tutorial',
			'date' : 'Friday, November 8th',
			'time' : 'Time TBD',
			'location' : 'Location TBD',
			'fa_icon' : 'fa-graduation-cap',
		},
		{
			'name' : 'Open Lab Night',
			'date' : 'Friday, November 15th',
			'time' : 'Time TBD',
			'location' : 'A.V. Williams 4176',
			'fa_icon' : 'fa-flask',
		},*/
	],

	FALL_19_SEMESTER_FRIDAY_WEEK_NUMS : {
		'Friday, August 30th' : 'Week 1',
		'Friday, September 6th' : 'Week 2',
		'Friday, September 13th' : 'Week 3',
		'Friday, September 20th' : 'Week 4',
		'Friday, September 27th' : 'Week 5',
		'Friday, October 4th' : 'Week 6',
		'Friday, October 11th' : 'Week 7',
		'Friday, October 18th' : 'Week 8',
		'Friday, October 25th' : 'Week 9',
		'Friday, November 1st' : 'Week 10',
		'Friday, November 8th' : 'Week 11',
		'Friday, November 15th' : 'Week 12',
		'Friday, November 22nd' : 'Week 13',
		'Friday, November 29th' : 'Week 14',
		'Friday, December 6th' : 'Week 15',
		'Friday, December 13th' : 'Week 16',
	}
});
