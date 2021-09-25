import React from 'react'
import "./ProjectCard.css"
import projects from '../projects'

const ProjectCard = () => {
    return (
        <div className="project-card-collection">
            {projects.map(project => {
                return <div className="project-card">
                    <img className="project-card-img" src={project.img} alt={project.alt} />
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                </div>
            })}
        </div>
    )
}

export default ProjectCard
