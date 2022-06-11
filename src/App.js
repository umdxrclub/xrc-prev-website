/**
 * Definition of the component for the body of the site's main webpage.
 */
import './App.css';
import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer'
import PersonCard from './components/PersonCard';
import ProjectCard from './components/ProjectCard';
import ContactRow from './components/ContactRow';
import DateEventList from './components/DateEventList';
import FlashItem from './components/FlashItem';
import XR_CONSTANTS from './XR_CONSTANTS'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";

function App() {

	// Function for getting the suffix of a date's day
	var getDateSuffix = function(num) {
		if (num > 3 && num < 21) {
			return 'th';
		} else if (num % 10 === 1) {
			return 'st';
		} else if (num % 10 === 2) {
			return 'nd';
		} else if (num % 10 === 3) {
			return 'rd';
		} else {
			return 'th';
		}
	}

	// Function for getting a day string the way I previously hardcoded it
	var getNiceDayDateString = function(date) {
		var str = date.toLocaleDateString('en-US', {weekday : 'long', month : 'long', day : 'numeric'});
		str += getDateSuffix(parseInt(str.match(/\d+$/g).sort((a,b) => b.length-a.length)[0])) + ', ' + (date.getYear() + 1900);
		return str;
	}

	// Group events by date
	var events_by_date = {};
	XR_CONSTANTS.EVENTS_INFORMATION.forEach(event => {
		if (events_by_date[event.date.valueOf()] == null) {
			events_by_date[event.date.valueOf()] = [];
		}
		events_by_date[event.date.valueOf()].push(event);
	});

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
				</Routes>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
