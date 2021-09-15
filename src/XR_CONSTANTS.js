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
			'name' : 'Kyle Gerry',
			'title' : 'Mentor'
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
	EVENTS_INFORMATION : [
		{
			'name' : 'Fall 2021 Kickoff Event',
			'date' : new Date(2021, 8, 24),
			'time' : 'Time: TBD',
			'location' : 'Location: TBD',
			'fa_icon' : 'fa-bullhorn'
		}
	],
});
