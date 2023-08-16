import React from 'react'
import Header from '../components/Header/Header'
import AboutUs from '../components/AboutUs/AboutUs'
import Category from '../components/Categories/Category'
import Bottom from '../components/Bottom/Bottom'
import NavBar from '../components/NavBar/NavBar'
function Home() {
  return (
    <div>
        <NavBar/>
        <Header/>
        <AboutUs/>
        {/* <Category /> */}
        <Bottom />
    </div>
  )
}

export default Home