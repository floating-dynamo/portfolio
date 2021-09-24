import React from 'react'
import "./HomePage.css"
import ProfileImg from "../images/shri.png"

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="profile-main">
                <img src={ProfileImg} alt="Profile_Image" className="profile-img" />
                <h1 className="profile-title">Sridhar Maskeri</h1>
            </div>
            <div className="profile-desc">
                <h1>Hi there,I am a Front-End Webdeveloper.</h1>
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
