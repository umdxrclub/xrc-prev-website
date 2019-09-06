import React from 'react';

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
						<li><a href="#team">Leadership</a></li>
					</ul>
				</div>
			</nav>

			{/* Banner */}
			<div class="section white-text" style={{'background-image': 'linear-gradient(#2d2d2d, #3d3d3d)'}}>
				<div class="container center">
					<div class="container">
						<img src="xr_logo_white.png" style={{height: 135}}></img>
						<h4>Augmented and Virtual Reality Club</h4>
						<h6>University of Maryland, College Park</h6>
						<br/><br/>
					</div>
				</div>
			</div>

			{/* About */}
			<div id="about" class="section scrollspy white grey-text text-darken-3">
				<div class="container">
					<div class="container">
						<h4>About Us</h4>
						<p>The XR Club was established to create an environment in which UMD students interested in augmented and virtual reality application development can collaborate with like minded individuals, and gain access to cutting edge hardware and software tools. In addition to providing access to physical resources, a primary mission of the club is providing the campus community with educational resources in augmented and virtual reality development through club events and hackathons.</p>
					</div>
				</div>
			</div>

			{/* Lab */}
			<div id="lab" class="section scrollspy white-text" style={{'background-image': 'linear-gradient(#2d2d2d, #3d3d3d)'}}>
				<div class="row container">
					<div class="container">
						<h4>The Lab</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula sit amet velit cursus congue. Duis congue feugiat ligula, non posuere ex vehicula a. Maecenas consequat lectus diam, vel vestibulum erat placerat ac. Mauris vitae ipsum cursus diam dapibus lacinia. Nulla egestas metus vitae lacus semper, ac aliquet massa bibendum. Morbi volutpat malesuada sem, feugiat laoreet est faucibus in. Ut cursus blandit lorem sed vestibulum.</p>
					</div>
				</div>
			</div>

			{/* Leadership */}
			<div id="team" class="section scrollspy white grey-text text-darken-3" style={{height: 500}}>
				<div class="container">
					<div class="container">
						<h4>Leadership</h4>

						<div class="row">
							<div class="col s4">
								<div class="card">
									<h5 class="center">Matt Graber</h5>
									<h6 class="center">President</h6>
								</div>
							</div>
							<div class="col s4">
								<div class="card">

									<h5 class="center">John Ball</h5>
									<h6 class="center">Vice President</h6>
								</div>
							</div>
							<div class="col s4">
								<div class="card">

									<h5 class="center">Jordan Woo</h5>
									<h6 class="center">Lead Mentor</h6>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div> 
	);
}

export default App;
