import React from 'react'
import "./Portfolio.css"
import ProjectCard from './ProjectCard'
import Skills from './Skills'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="projects">
                <h1>Projects</h1>
                <ProjectCard />
            </div>
            <hr />
            <div className="skills">
                <h1>Skills</h1>
            </div>
        </div>
    )
}

export default Portfolio
