import React from "react";
import "./ProjectCard.css";
import projects from "../projects";

const ProjectCard = () => {
	return (
		<div className="project-card-collection">
			{projects.map((project) => {
				return (
					<div className="project-card">
						<img
							className="project-card-img"
							src={project.img}
							alt={project.alt}
							style={project.imgType === "potrait" ? { width: "50%" } : null}
						/>
						<h1>{project.title}</h1>
						<p>{project.desc}</p>
						{project.website ? (
							<p>
								<a
									target="_blank"
									rel="noopener noreference"
									className="project-card-website"
									href={project.website}
								>
									Website
								</a>
							</p>
						) : null}
						{project.downloadLink ? (
							<p>
								<a
									target="_blank"
									rel="noopener noreference"
									className="project-card-website"
									href={project.downloadLink}
								>
									Download App
								</a>
							</p>
						) : null}
						{project.code ? (
							<p>
								<a
									href={project.code}
									target="_blank"
									rel="noopener noreference"
									className="project-card-code"
								>
									Source Code
								</a>
							</p>
						) : null}
						{project.appDesign ? (
							<p>
								<a
									href={project.appDesign}
									target="_blank"
									rel="noopener noreference"
									className="project-card-code"
								>
									App Design
								</a>
							</p>
						) : null}
					</div>
				);
			})}
		</div>
	);
};

export default ProjectCard;
