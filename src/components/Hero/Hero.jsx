import React from 'react'
import './Hero.scss'
import HeroImg from '../../assets/image/hero.png'
import TopSemi from '../../assets/image/topSemi.png'
import LeftSemi from '../../assets/image/leftSemi.png'
import RightSemi from '../../assets/image/rightSemi.png'




const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="heading">
          Welcome to <span>Incubyte</span>
        </div>
        <div className="sub-heading">
          Building bridges to success in tech ecosystem.
        </div>
        <div className="image">
          <img alt="Incubyte Image" src={HeroImg}/>
        </div>
      </div>
      <div className="about-container">
        <div className="about-heading">About Us</div>
        <div className="about-body">
          With over 3 years of experience, we at Incubyte specialize in setting up captive development centers for growing startups, addressing key challenges and providing tailor-made solutions for your business needs.
        </div>
      </div>
      <div class="semicircle semicircle-top">
        <img src={TopSemi}/>
      </div>
      <div class="semicircle semicircle-right-up">
        <img src= {RightSemi}/>
      </div>
      <div class="semicircle semicircle-left-down">
        <img src= {LeftSemi}/>
      </div>
    </div>
  )
}

export default Hero