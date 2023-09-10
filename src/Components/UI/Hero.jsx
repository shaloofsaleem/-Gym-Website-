import React from 'react'
import {FaPlay} from 'react-icons/fa'
import {FaLocationDot} from 'react-icons/fa6'
import {BsHeartPulseFill} from 'react-icons/bs'
import heroimg from '../../assets/img/gym-02.png'
import dumbleimg from '../../assets/img/dumble.png'
import './hero.css'

function Hero() {
  return (
    <section id='home'>
        <div className="container">
            <div className="hero_wrapper">
                {/* ====================HeroContant============= */}
                <div className="hero_contant">
                    <h2 className='section_title' data-aos='fade-up' data-aos-duration='1500'>Exercies is the key to a <span className="highlight">Healthy</span> LifeStyle</h2>
                    <p data-aos='fade-up' data-aos-delay="100" data-aos-duration='1800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nemo, maiores tempora corrupti quis  </p>
                    <div className="hero_btn" data-aos='fade-up' data-aos-delay="200" data-aos-duration='2000'>
                        <button className="register_btn">Get Started</button>
                        <button className="watch_btn"><span><FaPlay/></span>Watch Video</button>
                    </div>
                </div>
                {/* ============HeroImg============== */}
                <div className="hero_img">
                    <div className="hero_img_wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box_img">
                                        <img src= {heroimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos='fade-right'  data-aos-duration='1500' className="hart_rate">
                            <h5>Hart Rate</h5>
                            <span><BsHeartPulseFill/></span>
                            <h6>2567 BPM</h6>
                        </div>
                        <div className="gym_location" data-aos='fade-left'  data-aos-duration='1500'>
                            <span><FaLocationDot/></span>
                            <h5>Find a new <br /> Gym near you</h5>
                        </div>
                        <div className="dumble_icon"data-aos='fade-down'  data-aos-duration='1500'>
                            <img src={ dumbleimg } alt="" />
                        </div>



                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Hero
