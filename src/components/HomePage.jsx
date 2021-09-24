import React from 'react'
import "./HomePage.css"
import ProfileImg from "../images/shri.png"
import { CodeSandboxOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

const HomePage = () => {
    const linkedInLink = "https://www.linkedin.com/in/sridhar-maskeri-1714001aa/";
    const GithubLink = "https://github.com/floating-dynamo";
    const CodeSandboxLink = "https://codesandbox.io/u/Floating_dynamo"
    return (
        <div className="home-page">
            <div className="profile-main">
                <img src={ProfileImg} alt="Profile_Image" className="profile-img" />
                <h1 className="profile-title">Sridhar Maskeri</h1>
                <div className="socials">
                    <a href={linkedInLink} target="_blank" rel="noopener noreferrer"><LinkedinOutlined className="social-icons" /></a>
                    <a href={GithubLink} target="_blank" rel="noopener noreferrer"><GithubOutlined className="social-icons" /></a>
                    <a href={CodeSandboxLink} target="_blank" rel="noopener noreferrer"><CodeSandboxOutlined className="social-icons" /></a>
                </div>
            </div>
            <div className="profile-desc">
                <h1>Hi there, I am a Front-End Webdeveloper.</h1>
                <h4>You can Know more about me here.</h4>
                <div className="btn-container">
                    <button className="btn">About Me</button>
                    <button className="btn">Porfolio</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
