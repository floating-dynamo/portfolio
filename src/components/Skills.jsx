import React from 'react'
import "./Skills.css";
import skilldata from "../skilldata"

const Skills = () => {
    return (
        <div className="skill-collection">
            {skilldata.map(skill => {
                return <div className="skill">
                    <img src={skill.img} alt={skill.alt} />
                    <h2>{skill.name}</h2>
                </div>
            })}
        </div>
    )
}

export default Skills
