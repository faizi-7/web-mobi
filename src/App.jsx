import React from 'react'
import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Review from './components/Review/Review'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Features/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default App