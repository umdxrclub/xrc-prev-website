/**
 * Definition of the component for the body of the site's main webpage.
 */

import React from 'react';
import PersonCard from './PersonCard';
import ProjectCard from './ProjectCard';
import ContactRow from './ContactRow';
import XR_CONSTANTS from './XR_CONSTANTS'

function App() {

	return (
		<div className="App">

			{/* Nav bar */}
			<nav>
				<div class="nav-wrapper" style={{'background-color': '#2d2d2d'}}>
					<a href="#" class="brand-logo center"></a>
					<ul class="right">
						<li><a href="#about">About</a></li>
						<li><a href="#lab">Lab</a></li>
						<li><a href="#leadership">Leadership</a></li>
						<li><a href="#projects">Projects</a></li>
					</ul>
				</div>
			</nav>

			{/* Banner */}
			<div class="section white-text" style={{'background-image' : 'linear-gradient(#2d2d2d, #3d3d3d)'}}>
				<div class="container">
					<div class="container center">
						<img src="xr_logo_white.png" style={{height : 135}}></img>
						<h4>Augmented and Virtual Reality Club</h4>
						<h6>University of Maryland, College Park</h6>
						<br/>
						<ContactRow/>
					</div>
				</div>
			</div>

			<ul class="collection" style={{margin : 0}}>

				{/* About */}
				<li class="collection-item">
					<div id="about" class="section scrollspy grey-text text-darken-3 container">
						<div class="container">
							<h4>About Us</h4>
							<p>The XR Club was established to create an environment in which UMD students interested in augmented and virtual reality application development can collaborate with like minded individuals, and gain access to cutting edge hardware and software tools. In addition to providing access to physical resources, a primary mission of the club is providing the campus community with educational resources in augmented and virtual reality development through club events and hackathons.</p>
						</div>
					</div>
				</li>

				{/* Lab */}
				<li class="collection-item">
					<div id="lab" class="section scrollspy grey-text text-darken-3 container">
						<div class="container">
							<h4>The Lab</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula sit amet velit cursus congue. Duis congue feugiat ligula, non posuere ex vehicula a. Maecenas consequat lectus diam, vel vestibulum erat placerat ac. Mauris vitae ipsum cursus diam dapibus lacinia. Nulla egestas metus vitae lacus semper, ac aliquet massa bibendum. Morbi volutpat malesuada sem, feugiat laoreet est faucibus in. Ut cursus blandit lorem sed vestibulum.</p>
						</div>
					</div>
				</li>

				{/* Leadership */}
				<li class="collection-item">
					<div id="leadership" class="section scrollspy grey-text text-darken-3 container">
						<div class="container">
							<h4>Leadership</h4>
							<div class="row">
								{
									XR_CONSTANTS.LEADERSHIP_INFORMATION.map(person => {
										return <div class="col s12 m6 l4"><PersonCard {...person}></PersonCard></div>
									})
								}
							</div>
						</div>
					</div>
				</li>

				{/* Projects */}
				<li class="collection-item">
					<div id="projects" class="section scrollspy white grey-text text-darken-3 container">
						<div class="container">
							<h4>Projects</h4>
							<div class="row">
								{
									XR_CONSTANTS.PROJECTS_INFORMATION.map(project => {
										return <div class="col s12 l6"><ProjectCard {...project}></ProjectCard></div>
									})
								}
							</div>
						</div>
					</div>
				</li>
			</ul>

			{/* Footer */}
			<footer class="page-footer" style={{'background-image' : 'linear-gradient(#2d2d2d, #3d3d3d)'}}>
				<div class="container center">
					<ContactRow/>
				</div>
				<div class="footer-copyright" style={{'background-color' : '#2d2d2d'}}>
				</div>
			</footer>
		</div> 
	);
}

export default App;
