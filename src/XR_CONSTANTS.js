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
			'title' : 'President, Lead Organizer of RealityHacks',
			'web' : 'https://www.sahilmayenkar.com/',
			'linkedin' : 'https://www.linkedin.com/in/sahil-mayenkar/',
			'github' : 'https://github.com/SahilMayenkar'
		},
		{
			'name' : 'Jason Fotso',
			'title' : 'Vice President',
			'linkedin' : 'https://www.linkedin.com/in/jason-fotso/'
		},
		{
			'name' : 'Andrew Yuan',
			'title' : 'Treasurer, Mentor',
			'web' : 'https://andrewyuantw.github.io/',
			'linkedin' : 'https://www.linkedin.com/in/andrewyuantw/',
			'github' : 'https://github.com/andrewyuantw'
		},
		{
			'name' : 'Rohan Bajpai',
			'title' : 'Event Coordinator, Web Developer',
			'linkedin' : 'https://www.linkedin.com/in/rohan-bajpai-20/',
			'github' : 'https://github.com/rohannbajpai'
		},
		{
			'name' : 'Mrugesh Shah',
			'title' : 'Lab Manager'
		},
		{
			'name' : 'Kyuyoung Kim',
			'title' : 'Mentor'
		},
		{
			'name' : 'Damian Figueroa',
			'title' : 'Mentor',
			'github' : 'https://github.com/djfigs1'
		},
		{
			'name' : 'Luke Vernon',
			'title' : 'Mentor',
			'github' : 'https://github.com/lverno321'
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
	// fa_icon is flask for workshops, bullhorn for kickoffs, certificate for reality night, and users for social events
	EVENTS_INFORMATION : [
		{
			'name' : 'Fall 2021 Kickoff Event',
			'date' : new Date(2021, 8, 24),
			'time' : '5:00 PM',
			'location' : 'ASY 2309',
			'url' : 'https://terplink.umd.edu/event/7378882',
			'fa_icon' : 'fa-bullhorn'
		},
		{
			'name' : 'Setting Up Your XR Development Environment',
			'date' : new Date(2021, 8, 28),
			'time' : '6:30 PM',
			'location' : 'JMZ 0220',
			'url' : 'https://terplink.umd.edu/event/7394361',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'RealityHacks Organizers Interest Meeting',
			'date' : new Date(2021, 8, 29),
			'time' : '6:30 PM',
			'location' : 'SQH 1117',
			'url' : 'https://terplink.umd.edu/event/7400679',
			'fa_icon' : 'fa-info'
		},
		{
			'name' : 'NASA SUITS Interest Meeting',
			'date' : new Date(2021, 8, 30),
			'time' : '6:30 PM',
			'location' : 'MTH B0421',
			'url' : 'https://terplink.umd.edu/event/7429767',
			'fa_icon' : 'fa-info'
		},
		{
			'name' : 'XR Lab Open House',
			'date' : new Date(2021, 9, 1),
			'time' : '5:00 PM',
			'location' : 'AVW 4176',
			'url' : 'https://terplink.umd.edu/event/7412922',
			'fa_icon' : 'fa-users'
		}, 
		{
			'name' : 'Workshop: Introduction to Unity (Part I)',
			'date' : new Date(2021, 9, 5),
			'time' : '6:30 PM',
			'location' : 'JMZ 0220',
			'url' : 'https://terplink.umd.edu/event/7466340',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Core Disruption Mini-Tournament',
			'date' : new Date(2021, 9, 8),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/7482718',
			'fa_icon' : 'fa-users'
		}, 
		{
			'name' : 'XR Club Workshop: Introduction to Unity (Part II)',
			'date' : new Date(2021, 9, 12),
			'time' : '6:30 PM',
			'location' : 'JMZ 0220',
			'url' : 'https://terplink.umd.edu/event/7493914',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Intro to VR Development (Part I)',
			'date' : new Date(2021, 9, 19),
			'time' : '6:30 PM',
			'location' : 'ASY 3207',
			'url' : 'https://terplink.umd.edu/event/7525971',
			'fa_icon' : 'fa-flask'
		}, 
		{
			'name' : 'Intro to VR Development (Part II)',
			'date' : new Date(2021, 9, 26),
			'time' : '6:30 PM',
			'location' : 'JMZ 0220',
			'url' : 'https://terplink.umd.edu/event/7530118',
			'fa_icon' : 'fa-flask'
		}, 
		{
			'name' : 'Intro to AR Development (Part I - Sensing the Environment)',
			'date' : new Date(2021, 10, 9),
			'time' : '6:30 PM',
			'location' : 'JMZ 0220',
			'url' : 'https://terplink.umd.edu/event/7595955',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Gaming Night w/ I4C',
			'date' : new Date(2021, 10, 11),
			'time' : '5:00 PM',
			'location' : 'IRB 1104 (DICE Lounge)',
			'url' : 'https://terplink.umd.edu/event/7604034/',
			'fa_icon' : 'fa-users'
		},
		{
			'name' : 'Intro to AR Development (Part II - Interactions and Realism)',
			'date' : new Date(2021, 10, 16),
			'time' : '6:30 PM',
			'location' : 'JMZ 0220',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Life of a Neuron Immersive Exhibition',
			'date' : new Date(2021, 10, 19),
			'time' : '5:00 PM',
			'location' : 'ARTECHOUSE DC',
			'url' : 'https://terplink.umd.edu/event/7578885',
			'fa_icon' : 'fa-users'
		},
		
		
	],
});
