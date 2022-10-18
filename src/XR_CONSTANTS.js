/**
 * This file contains constants used for the XR club website.
 * In the future when we add more involved features to the site this information may be moved to a database.
 * 
 * Constants are organized by the page or component where it will appear on the website.
 */

module.exports = Object.freeze({

	// Supports markdown
	ALERT : 'Check out our upcoming workshops and Fun Friday events on [TerpLink](https://terplink.umd.edu/organization/xr-club)!',
	LINKS : {

		TERPLINK_STR : 'https://terplink.umd.edu/organization/xr-club/',
		EMAIL_STR : 'mailto:umd.xr.club@gmail.com',
		DISCORD_STR : 'https://discord.com/invite/KBx8mF6/',
		LINKEDIN_STR: 'https://www.linkedin.com/groups/8981512/',
		FACEBOOK_STR : 'https://www.facebook.com/groups/umd.xr.club/',
		TWITTER_STR : 'https://twitter.com/umdxrclub/',
		INSTAGRAM_STR : 'https://instagram.com/umdxrclub/',
		CALENDAR_STR : 'https://ter.ps/xrcalendar/',
		NEWSLETTER_STR : 'https://us19.campaign-archive.com/home/?u=ec383b1ee117d6a39daa338a1&id=68057666d1',
		YOUTUBE_STR : 'https://www.youtube.com/channel/UCbZ2BZ_fuBjoEp8ilTSrRww',

	},

	FOOTER : {
		// Supports markdown
		GET_INVOLVED_STR : 'Events are open to all UMD students. If you want to stay updated on our latest upcoming events, ' +
		'make sure to join our Discord server and register as a club member on TerpLink for access to our weekly emails.',

	},

	HOME_PAGE : {

		// Supports markdown
		MISSION : 'XR Club is a student organization at the University of Maryland, College Park that focuses on immersive' + 
			' technologies, like virtual reality (VR), augmented reality (AR), and mixed reality (MR). We provide students with' + 
			' resources and opportunities to explore XR through hands-on tutorials, projects, hackathons, game nights, open lab' +
			' hours, mentor office hours, and more!',


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
				'description': 'Gain hands-on experience with XR equipment and meet other XR Club members while challenging them to immersive games.',
				'action' : 'PLAY',
				'link' : '/events',
			},
			{
				'title' : 'PROJECTS',
				'icon' : 'svg/build-icon.svg',
				'description': 'Collaborate with peers to develop personal projects, build immersive installations, and compete in external XR challenges.',
				'action' : 'CONTRIBUTE',
				'link' : '/projects',
			}
		],

	},

	ABOUT_PAGE : {

		DESCRIPTION : 'We are the University of Maryland\'s Extended Reality (XR) Club.',

		// Supports markdown
		INTRO_PARAGRAPH : "The XR Club is a student organization here at the University of Maryland (UMD) for students interested " + 
			"in virtual, augmented and mixed reality technologies. We hope to create a immersive ecosystem here on campus by " + 
			"providing students with access to cutting edge hardware and software tools as well as educational resources through " +
			"workshops and hackathons.",

		// Information about members of the xr club leadership.
		LEADERSHIP_INFORMATION : [
			
			{
				'name' : 'Jason Fotso-Puepi',
				'title' : 'President',
				'linkedin' : 'https://www.linkedin.com/in/jason-fotso/',
				'image' : 'jason.JPG',
			},
			{
				'name' : 'Damian Figueroa',
				'title' : 'Vice President, Web Developer',
				'github' : 'https://github.com/djfigs1',
				'image' : 'dj.png',
			},
			{
				'name' : 'Andrew Yuan',
				'title' : 'Treasurer',
				'web' : 'http://andrewyuantw.com/',
				'linkedin' : 'https://www.linkedin.com/in/andrewyuantw/',
				'github' : 'https://github.com/andrewyuantw',
				'image' : 'andrew.jpg',
			},
			{
				'name' : 'Justin Pratama',
				'title' : 'Engagement Director',
				'linkedin' : 'https://www.linkedin.com/in/justin-pratama/',
				'image' : 'justin.jpg'
			},
			{
				'name' : 'Nicholas Nguyen',
				'title' : 'Lab Manager'
			},
			{
				'name' : 'Luke Vernon',
				'title' : 'Mentor',
				'github' : 'https://github.com/lverno321'
			},
			{
				'name' : 'Ian Morrill',
				'title' : 'Mentor',
				'web' : 'https://ianmorrill.com/',
				'github' : 'https://github.com/iwotastic/',
				'linkedin' : 'https://www.linkedin.com/mwlite/in/imorrill',
				'image' : 'ian.jpg',
			},
			{
				'name' : 'Tejas Chandakkar',
				'title' : 'Mentor',
				'linkedin' : 'https://www.linkedin.com/in/tejas-chandakkar-88498a215/'
			},
			{
				'name' : 'Abhinav Garlapati',
				'title' : 'Mentor',
				'linkedin' : 'https://www.linkedin.com/in/abhinav-garlapati-18yrs/',
				'image' : 'abhinav.jpg',
			},
			{
				'name' : 'Connor Hartzog',
				'title' : 'Mentor',
				'github' : 'https://github.com/DukeOfHounds',
				'image' : 'connor.jpg'
			},
			{
				'name' : 'Marilyn Ortega',
				'title' : 'Graphic Design Lead',
				'web' : 'https://mariortegajx.wixsite.com/marior',
				'linkedin' : 'https://www.linkedin.com/in/marilyn-ortega-926b8420b/',
				'image' : 'mari.jpg'
			},
			{
				'name' : 'Elaine Gao',
				'title' : 'Graphic Designer',
				'linkedin' : 'https://www.linkedin.com/in/elaineyien/',
				'image' : 'elaine.jpg',
			},
			{
				'name' : 'Samson Mulugeta',
				'title' : 'Event Coordinator',
				'linkedin' : 'https://www.linkedin.com/in/samson02/',
				'image' : 'samson.jpg'
			},
			{
				'name' : 'Sahithi Jarugula',
				'title' : 'Marketing Director',
				'linkedin' : 'https://www.linkedin.com/in/sahithi-jarugula-9aa0b2222',
				'image' : 'sahithi.png'
			},
			{
				'name' : 'Caroline Dinh',
				'title' : 'Web Developer',
				'github' : 'https://github.com/cyborg48/',
				'linkedin' : 'http://linkedin.com/in/ctdinh/',
				'image' : 'caroline.jpg',
			},
			{
				'name' : 'Ajitesh Kaladi',
				'title' : 'Media Producer',
				'linkedin' : 'https://www.linkedin.com/in/ajkaladi/',
				'image' : 'aj.JPG',
			}
		],
	
		
	},

	NEWS_PAGE : {
		DESCRIPTION : 'View the latest mailings of our newsletter, sent via TerpLink, here.',
		
		// Supports Markdown
		BOTTOM_NOTE : 'To receive our newsletter in your inbox, please join our organization on TerpLink.'
	},

	EVENT_PAGE : {

		DESCRIPTION : 'Access TerpLink invitations for upcoming events and recordings for previous events here.',
		// Information about XR Club events throughout the semester
		// 'image' is assumed to be in in public/images/events (write 'image.jpg',
		//  not 'images/events/image.jpg'). If 'image' is not listed, no header image will display.

		// For past events with a YouTube recording: define 'youtube_id' as the string after
		// 'https://www.youtube.com/watch?v=' in the video URL (but before the next '&').
		// Example: 'https://www.youtube.com/watch?v=wdm6h5g2OWg&t=5s' -> 'wdm6h5g2OWg'.
		// In most cases you should be able to just copy the last part of the URL.

		EVENTS_INFORMATION : [
			{
				'name' : 'XR Club Fall 2022 Kickoff',
				'date' : new Date(2022, 8, 16),
				'time' : '5:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8350380',
				'youtube_id' : 'yJoPU824X2M',
			},
			{
				'name' : 'Setting Up Your XR Development Environment',
				'date' : new Date(2022, 8, 20),
				'time' : '6:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8382253',
				'youtube_id' : 'DqsiXCvlttU',
			},
			{
				'name' : 'XR Project Brainstorm Night',
				'date' : new Date(2022, 8, 23),
				'time' : '5:00 PM',
				'location' : 'IRB 0110',
				'url' : 'https://terplink.umd.edu/event/8382275',
				'youtube_id' : 'hsCSGd0eunU'
			},
			{
				'name' : 'Introduction to Unity (Part 1)',
				'date' : new Date(2022, 8, 27),
				'time' : '6:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8382269',
				'youtube_id' : 'qS_28gOfRg4',
			},
			{
				'name' : 'XR Club Speaker Series: Joseph Cathey - Capitol Interactive',
				'date' : new Date(2022, 8, 29),
				'time' : '5:00 PM',
				'location' : 'IRB 0318',
				'url' : 'https://terplink.umd.edu/event/8382289',
				'youtube_id' : 'OzAPyuUzMSM',
			},
			{
				'name' : 'Project Kickoff Night',
				'date' : new Date(2022, 8, 30),
				'time' : '5:00 PM',
				'location' : 'IRB 0110',
				'url' : 'https://terplink.umd.edu/event/8396260',
				'youtube_id' : 'hsCSGd0eunU',
			},
			{
				'name' : '2023 NASA SUITS Challenge Interest Meeting',
				'date' : new Date(2022, 9, 2),
				'time' : '8:00 PM',
				'location' : 'XR CLUB DISCORD: VOICE CHAT 1',
				'url' : 'https://terplink.umd.edu/event/8449873',
				'image' : 'fall2022/nasa_suits.jpg',
			},
			{
				'name' : 'Introduction to Unity (Part 2)',
				'date' : new Date(2022, 9, 4),
				'time' : '6:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8424600',
				'image' : 'fall2022/unity_p2.jpg',
			},
			{
				'name' : 'Beat Saber Tournament',
				'date' : new Date(2022, 9, 7),
				'time' : '5:00 PM',
				'location' : 'IRB 0110',
				'url' : 'https://terplink.umd.edu/event/8434940',
				'image' : 'fall2022/beat_saber.jpg',
			},
			{
				'name' : 'Introduction to VR Development (Part 1)',
				'date' : new Date(2022, 9, 11),
				'time' : '6:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8454919',
				'image' : 'fall2022/vr_p1.jpg',
			},
			{
				'name' : 'Introduction to VR Development (Part 2)',
				'date' : new Date(2022, 9, 18),
				'time' : '6:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8475809',
				'image' : 'fall2022/vr_p2.jpg',
			},
			{
				'name' : 'Introduction to AR Development (Part 1)',
				'date' : new Date(2022, 9, 25),
				'time' : '6:00 PM',
				'location' : 'AVW 3258',
				'url' : 'https://terplink.umd.edu/event/8454921',
				'image' : 'fall2022/ar_p1.jpg',
			},
			{
				'name' : 'XR Club & Startup Shell Speaker Event: Fireside Chat with Meta VR SWE and Terp Alumnus Joshua Berenhaus',
				'date' : new Date(2022, 9, 21),
				'time' : '5:00 PM',
				'location' : 'IDEA 1101',
				'url' : 'https://terplink.umd.edu/event/8506410',
				'image' : 'fall2022/joshua_berenhause.jpg',
			},
			/*
			{
				'name' : 'Van Gogh Exhibit: The Immersive Experience',
				'date' : new Date(2022, 9, 28),
				'time' : '5:00 PM',
				'location' : 'AVW 4176 (CHECK-IN)',
				'url' : 'https://terplink.umd.edu/event/8434940',
				'image' : 'fall2022/van_gogh.jpg',
			},
			*/
			
		],

	},

	PROJECT_PAGE : {

		DESCRIPTION : 'Check out some projects by current and past members of the club.',

		// Supports Markdown
		PARAGRAPH : 'Throughout the year, XR Club members collaborate on group projects to apply what they\'ve learned ' + 
			'in workshops and bring their ideas to life. Join our Discord server for more information on currently active ' +
			'projects and challenges!',

		CHALLENGE_INFORMATION : [
			{
				'name' : 'NASA S.U.I.T.S. Challenge',
				'description' : [
					'NASA S.U.I.T.S (Spacesuit User Interface Technologies for Students) is an annual challenge for ' + 
					'undergraduate students to design and build spacesuit information displays in augmented reality. ' 
				],
				'image' : 'NASASUITS-logo.png',
				'url' : 'https://microgravityuniversity.jsc.nasa.gov/nasasuits',
				'status' : 'PROPOSALS DUE NOVEMBER 1 2022',
				'action' : 'SUBMITTED PROPOSAL',
				'years_participated' : '2021, 2022',
			},
			{
				'name' : 'Snap Creative Challenge',
				'description' : [
					'The Snap Creative Challenge is an opportunity for HCI and AR researchers to design immersive and multisensorial experiences ' + 
					'beyond looking at images and videos through a phone.'],
				'image' : 'snap_ar_lens_challenge.png',
				'url' : 'https://www.snapcreativechallenge.com/',
				'status' : 'Proposals due July 31 2022',
				'action' : 'SUBMITTED PROPOSAL',
				'years_participated' : '2021, 2022',
			},

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


	},

	LAB_PAGE : {

		LAB_ADDRESS : [
			'4176 A.V. Williams',
			'8223 Paint Branch Dr',
			'College Park, MD 20740'
		],

		// Supports Markdown
		DESCRIPTION : 
			"Need a place to chill to some cool VR games (like Beat Saber) and immersive experiences after a long day of classes? \n" +
			"Looking to utilize powerful computers to build out your latest AR/VR idea and get some help troubleshooting your XR project? \n" +
			"Want to brainstorm new ideas and chat about the future of XR with other members of the club? \n" + 
			"If so, then stop by the XR Lab (AVW 4176) for our Open Lab Hours for all your XR needs! We’re open several times throughout " + 
			"the week; check out the [XR Club Google Calendar](https://ter.ps/xrcalendar) for the latest timings."
			
		,

	},

	DONATION_PAGE : {

		DESCRIPTION: "Here at XR Club we strive to make expensive immersive hardware and software more accessible to the general student body. If you are interested in donating you can do so through the Venmo link below. Any amount helps, from one dollar to one game! All funding obtained through donations will be displayed here and anyone who donates will be highlighted on this page if they wish.",

		DONATION_GOAL: 200,

		DONATION_PROGRESS: 0,

		NUM_DONORS: 0,

		VENMO: '@XR-CLUB',

		VENMO_LINK: 'https://account.venmo.com/u/xr-club',

		WISH_LIST_SMALL: [
			{
				'title' : 'Tilt Brush',
				'subtitle' : '$19.99 via Oculus store',
				'image' : 'tilt_brush.jpg'
			},
			{
				'title' : 'Superhot VR',
				'subtitle' : '$24.99 via Oculus store',
				'image' : 'superhot.jpg',
			},
			{
				'title' : 'Beat Saber',
				'subtitle' : '$29.99 via Steam',
				'image' : 'beat_saber.jpg'
			},

		],

		WISH_LIST: [
			/*{
			{
				'title' : 'Drawing tablets',
				'subtitle' : 'Wacom Intuos Pro S: $250',
				'image' : 'tablet.jpg'
			},
			*/
			{
				'title' : 'Haptic Gloves & Suits',
				'subtitle' : 'bHaptics TactGlove: $299',
				'image' : 'gloves.jpg'
			},
			/*
			{
				'title' : 'Olfactory Technology',
				'subtitle' : 'Cilia Developer Kit: $450',
				'image' : 'cilia.png'
			},
			*/
			{
				'title' : 'VR Treadmills',
				'subtitle' : 'KAT Walk C: $1,299',
				'image' : 'kat_walk.jpg'
			},
			/*{
				'title' : 'High-end workstations',
				'subtitle' : 'RTX 4090 GPU: $1,599',
				'image' : 'gpu.jpg'
			},
			{
				'title' : 'Head Mounted Displays',
				'subtitle' : 'Varjo Aero: $1,990',
				'image' : 'varjo_aero.jpg'
			},
			*/
			{
				'title' : 'Lightweight AR Headsets',
				'subtitle' : 'Magic Leap 2: $3,299',
				'image' : 'magicleap2.jpg'
			},
		],

		DONORS: [
		],

	},

	ERROR_PAGE : {

		DESCRIPTION: "The page you were looking for was not found."

	}

});