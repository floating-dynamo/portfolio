import React from "react";
import "./About.css";
import profileImg from "../images/shri.png";

const About = () => {
	return (
		<div className="about">
			<h1 className="about-title">About</h1>
			<div className="about-content">
				<img
					className="about-profile-img"
					src={profileImg}
					alt="Sridhar Maskeri"
				/>
				<div className="about-content-main">
					<p>
						I am currently a final year student, studying Electronics &
						Telecommunication Engineering at Goa College of Engineering.
					</p>
					<div className="about-resume">
						<p>Download Resume/CV : </p>
						<a href="https://drive.google.com/file/d/1aZVUjBvzZ7Gth06OOSdjx0uWMYd4LdxZ/view?usp=sharing">
							Here
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
