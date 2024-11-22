import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Info from '../components/Info'
import Services from '../components/Services'
import Features from '../components/Features'
import Review from '../components/Review'
import Banner from './../components/Banner';
import Footer from '../components/Footer'
import ScrollingText from '../components/ScrollingText'

const Home = () => {
  return (
    <div>
      {/* <ScrollingText/> */}
      <Navbar/>
      <Main/>
      <Info/>
      <Services/>
      <Features/>
      <Banner/>
      <Review/>
      <Footer/>
      
    </div>
  )
}

export default Home
