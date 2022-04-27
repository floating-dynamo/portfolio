import React from 'react'
import HomePageContent from '../components/HomePageContent'
import Navbar from '../components/Navbar'
import "./HomePage.css"

const Home = () => {
  return (
    <div className='home-page'>
        <Navbar />
        <HomePageContent />
    </div>
  )
}

export default Home