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
import Error from './pages/Error';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'
import Alert from './components/Alert';
import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from "react-router-dom";

function App() {

	return (
		<div className="App">
			<Router>
				<a id="top"/>
				<ScrollToTop/> {/* Hook to scroll to top of page when page changes */}
				<Alert />
				<div className="page-body">
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/news" element={<News/>}/>
						<Route path="/events" element={<Events/>}/>
						<Route path="/lab" element={<Lab/>}/>
						<Route path="/projects" element={<Projects/>}/>
						<Route path="*" element={<Error/>}/>
					</Routes>
				</div>
				<Footer/>
			</Router>
		</div>
	);
}

export default App;
