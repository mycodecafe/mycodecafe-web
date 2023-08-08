import React from 'react'
import Header from '../components/Header/Header'
import AboutUs from '../components/AboutUs/AboutUs'
import Category from '../components/Categories/Category'
import Bottom from '../components/Bottom/Bottom'
function Home() {
  return (
    <div>
        <Header/>
        <AboutUs/>
        {/* <Category /> */}
        <Bottom />
    </div>
  )
}

export default Home