/**
 * Definition of the component for the body of the site's main webpage.
 */
import './App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Lab from './pages/Lab';
import Donate from './pages/Donate';
import Error from './pages/Error';
import Footer from './components/Footer'
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";
import { LINKS } from './XR_CONSTANTS';
import { getAnalytics, logEvent } from "firebase/analytics";
import app from './Firebase';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

		if (window.location.href.indexOf("localhost") == -1) {
			// Log notable link clicks with Firebase
			const analytics = getAnalytics(app);
			const links = document.querySelectorAll("a");
			links.forEach(link => {
				let itemID = "";
				switch (link.href) {
					case LINKS.CALENDAR_STR:
						itemID = "Google Calendar";
						break;
					case LINKS.DISCORD_STR: 
						itemID = "Discord";
						break;
					case LINKS.EMAIL_STR: 
						itemID = "Email";
						break;
					case LINKS.INSTAGRAM_STR: 
						itemID = "Instagram";
						break;
					case LINKS.LINKEDIN_STR: 
						itemID = "LinkedIn";
						break;
					case LINKS.TERPLINK_STR: 
						itemID = "TerpLink";
						break;
					case LINKS.TWITTER_STR: 
						itemID = "Twitter";
						break;
					case LINKS.NEWSLETTER_STR: 
						itemID = "Newsletter";
						break;
					case LINKS.YOUTUBE_STR: 
						itemID = "YouTube";
						break;

					default:
						break;
				}
				if (link.href.indexOf("terplink.umd.edu/event") > 0) {
					itemID = "TerpLink Event";
				} if (link.href.indexOf("mailchi.mp") > 0) {
					itemID = "Newsletter Post"
				} if (link.id == "terplink-button") { // Home TerpLink button (no href but still counts)
					itemID = "TerpLink"
				}
				if (itemID != "") {
					link.addEventListener("click", function() {
						logEvent(analytics, 'select_content', {
							content_id: itemID
						});
						console.log(itemID + " selected");
					});
				}
			});
		}	
	}

	render() {

		return (
			<div className="App">
				<Router>
					<a id="top"/>
					<Alert />
					<div className="page-body">
						<Routes>
							<Route path="/" element={<Home/>}/>
							<Route path="/about" element={<About/>}/>
							<Route path="/news" element={<News/>}/>
							<Route path="/events" element={<Events/>}/>
							<Route path="/lab" element={<Lab/>}/>
							<Route path="/projects" element={<Projects/>}/>
							{/* <Route path="/donate" element={<Donate/>}/> */}
							<Route path="*" element={<Error/>}/>
						</Routes>
					</div>
				<Footer/>
				</Router>
			</div>
		);
	}
}

export default App;
