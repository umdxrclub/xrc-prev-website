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
	INSTAGRAM_STR : 'https://instagram.com/umdxrclub/',

	LAB_ADDRESS : [
		'4176 A.V. Williams',
		'8223 Paint Branch Dr',
		'College Park, MD 20740'
	],

	ABOUT_US_STR : 'XR Club is a student organization at the University of Maryland, College Park that focuses on immersive' + 
		' technologies, like virtual reality (VR), augmented reality (AR), and mixed reality (MR). We provide students with' + 
		' resources and opportunities to explore XR through hands-on tutorials, projects, hackathons, game nights, open lab' +
		' hours, mentor office hours, and more!',

	ABOUT_STR_OLD : 'The XR Club was established to create an environment in which UMD students interested in augmented' + 
	' and virtual reality application development can collaborate with like-minded individuals and gain access to' + 
	' cutting-edge hardware and software tools. In addition to providing access to physical resources, a primary mission of the' +
	' club is providing the campus community with educational resources in augmented and virtual reality development through' + 
	' club events and hackathons.',

	PAGE_DESCRIPTIONS : {
		ABOUT : 'We are the University of Maryland\'s Extended Reality (XR) Club.',
		EVENTS : 'Join us to learn about XR development and get hands-on experience with immersive technology.',
		PROJECTS : 'Check out some projects by current and past members of the club.',

	},

	GET_INVOLVED_STR : 'Events are open to all UMD students. If you want to stay updated on our latest upcoming events, ' +
	'make sure to join our Discord server and register as a club member on TerpLink for access to our weekly emails.',

	HOME_ACTION_CARDS : [
		{
			'title' : 'WORKSHOPS',
			'icon' : 'svg/lab-icon.svg',
			'description': 'Learn about XR technologies and techniques such as AR/VR development, 3D modeling, Unity, and Oculus from fellow XR Club members.',
			'action' : 'EXPLORE',
			'link' : '/events'
		},
		{
			'title' : 'GAME NIGHTS',
			'icon' : 'svg/game-icon.svg',
			'description': 'Gain hands-on experience with XR equipment and meet other XR Club members while trying your hand at immersive games.',
			'action' : 'PLAY',
			'link' : '/events',
		},
		{
			'title' : 'PROJECTS',
			'icon' : 'svg/build-icon.svg',
			'description': 'Collaborate with peers to build personal projects, immersive exhibitions, and submissions for external XR challenges.',
			'action' : 'CONTRIBUTE',
			'link' : '/projects',
		}
	],

	// Information about members of the xr club leadership.
	LEADERSHIP_INFORMATION : [
		
		{
			'name' : 'Jason Fotso-Puepi',
			'title' : 'President',
			'linkedin' : 'https://www.linkedin.com/in/jason-fotso/',
			'github' : 'https://github.com/DuragJay'
		},
		{
			'name' : 'Sahil Mayenkar',
			'title' : 'Vice President, Lead Organizer of RealityHacks',
			'web' : 'https://www.sahilmayenkar.com/',
			'linkedin' : 'https://www.linkedin.com/in/sahil-mayenkar/',
			'github' : 'https://github.com/SahilMayenkar'
		},
		
		{
			'name' : 'Andrew Yuan',
			'title' : 'Treasurer, Mentor',
			'web' : 'https://andrewyuantw.github.io/',
			'linkedin' : 'https://www.linkedin.com/in/andrewyuantw/',
			'github' : 'https://github.com/andrewyuantw'
		},
		{
			'name' : 'Justin Pratama',
			'title' : 'Engagement Director, Mentor',
			'linkedin' : 'https://www.linkedin.com/in/justin-pratama/'
		},
		{
			'name' : 'Mrugesh Shah',
			'title' : 'Lab Manager'
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
		},
		{
			'name' : 'Ian Morrill',
			'title' : 'Mentor',
			'web' : 'https://ianmorrill.com/'
		},
		{
			'name' : 'Tejas Chandakkar',
			'title' : 'Mentor',
			'linkedin' : 'https://www.linkedin.com/in/tejas-chandakkar-88498a215/'
		},
		{
			'name' : 'Marilyn Ortega',
			'title' : 'Graphic Designer',
			'web' : 'https://mariortegajx.wixsite.com/marior',
			'linkedin' : 'https://www.linkedin.com/in/marilyn-ortega-926b8420b/'
		},
		{
			'name' : 'Samson Mulugeta',
			'title' : 'Event Coordinator',
			'linkedin' : 'https://www.linkedin.com/in/samson02/'
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
			'name' : 'Spring 2022 Kickoff + Lab Open House',
			'date' : new Date(2022, 1, 11),
			'time' : '5:00 PM',
			'location' : 'AVW 2460',
			'url' : 'https://terplink.umd.edu/event/7868701',
			'fa_icon' : 'fa-bullhorn'
		},
		{
			'name' : 'Introduction to Unity (Part I)',
			'date' : new Date(2022, 1, 15),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/7877571',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Brainstorm Night',
			'date' : new Date(2022, 1, 18),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/7899939',
			'fa_icon' : 'fa-users'
		},
		{
			'name' : 'Introduction to Unity (Part II)',
			'date' : new Date(2022, 1, 22),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/7900002',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Beat Saber Tournament',
			'date' : new Date(2022, 1, 25),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/7901068',
			'fa_icon' : 'fa-gamepad'
		},
		{
			'name' : 'Introduction to VR Development (Part I)',
			'date' : new Date(2022, 2, 1),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/7949013',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Projects Kickoff Night',
			'date' : new Date(2022, 2, 4),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/7951664',
			'fa_icon' : 'fa-users'
		},
		{
			'name' : 'Introduction to VR Development (Part II)',
			'date' : new Date(2022, 2, 8),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/7970818',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Gaming Night',
			'date' : new Date(2022, 2, 10),
			'time' : '5:30 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/7971682',
			'fa_icon' : 'fa-gamepad'
		},
		{
			'name' : 'What CS Electives Should I Take? (An XR Students Perspective)',
			'date' : new Date(2022, 2, 11),
			'time' : '5:00 PM',
			'location' : 'CSI 1121',
			'url' : 'https://terplink.umd.edu/event/7974580',
			'fa_icon' : 'fa-microphone'
		},
		{
			'name' : 'Intro to 3D Modeling with Blender',
			'date' : new Date(2022, 2, 15),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/7985795',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Intro to AR Development (Part I - Sensing the Environment)',
			'date' : new Date(2022, 2, 29),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/8010609',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Experience Your World...with Holograms (ft. Microsoft HoloLens 2)',
			'date' : new Date(2022, 3, 1),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/8026268',
			'fa_icon' : 'fa-gamepad'
		},
		{
			'name' : 'Intro to AR Development (Part II - Interactions and Realism)',
			'date' : new Date(2022, 3, 5),
			'time' : '6:30 PM',
			'location' : 'CSI 2117',
			'url' : 'https://terplink.umd.edu/event/8043933',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Build Your Own XR Tracking System from Scratch',
			'date' : new Date(2022, 3, 12),
			'time' : '6:30 PM',
			'location' : 'The Sandbox (IRB 1231)',
			'url' : 'https://terplink.umd.edu/event/8049140',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Mario Kart AR Tournament',
			'date' : new Date(2022, 3, 15),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/8059509',
			'fa_icon' : 'fa-gamepad'
		},
		{
			'name' : 'Exploring the Oculus Presence Platform (The Building Block of the Metaverse)',
			'date' : new Date(2022, 3, 19),
			'time' : '6:30 PM',
			'location' : 'AVW 3258',
			'url' : 'https://terplink.umd.edu/event/8066865',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Core Disruption Mini-Tournament',
			'date' : new Date(2022, 3, 22),
			'time' : '5:00 PM',
			'location' : 'IRB 0110',
			'url' : 'https://terplink.umd.edu/event/8074228',
			'fa_icon' : 'fa-gamepad'
		},
		{
			'name' : 'Introduction to the AR Cloud (Persistent and Multi-User AR)',
			'date' : new Date(2022, 3, 26),
			'time' : '6:30 PM',
			'location' : 'AVW 3258',
			'url' : 'https://terplink.umd.edu/event/8080380',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Where to Go From Here (Continue Exploring XR)',
			'date' : new Date(2022, 4, 3),
			'time' : '6:30 PM',
			'location' : 'AVW 3258',
			'url' : 'https://terplink.umd.edu/event/8089732',
			'fa_icon' : 'fa-flask'
		},
		{
			'name' : 'Reality Night (Spring 2022)',
			'date' : new Date(2022, 4, 6),
			'time' : '5:00 PM',
			'location' : 'IRB Lobby',
			'url' : 'https://terplink.umd.edu/event/8089730',
			'fa_icon' : 'fa-gamepad'
		}
		
		
	],
});
