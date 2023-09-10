import React from 'react'
import './pricing.css'
import {AiTwotoneCheckCircle} from 'react-icons/ai'

function Pricing() {
  return (
    <section id='price'>
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">Gym <span className="highlight">Pricing</span> Plan</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Blanditiis adipisci sequi reprehenderit maiores ex cupiditate?</p>
            </div>
            {/* =================Pricing_Wrapper================ */}
            <div className="pricing_wrapper">
                <div className="pricing_item" data-aos='fade-up'  data-aos-duration='1500'>
                    <div className="pricing_card_top">
                        <h2 className="section_top">Regular Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>
                    <div className="service">
                        <ul>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Unlimited access to the gym</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Customer Support</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Persnol Trainer</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Standard Options</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>5 Classes per week</li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
                <div className="pricing_item pricing_item-02"  data-aos='fade-up'  data-aos-duration='1800'>
                    <div className="pricing_card_top">
                        <h2 className="section_top">Premium Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>
                    <div className="service">
                        <ul>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Unlimited access to the gym</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Customer Support</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Persnol Trainer</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Standard Options</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>5 Classes per week</li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
                <div className="pricing_item"  data-aos='fade-up'  data-aos-duration='2000'>
                    <div className="pricing_card_top">
                        <h2 className="section_top">Standard Member</h2>
                        <h2 className="pricing section_title">$50 <span>/month</span></h2>
                    </div>
                    <div className="service">
                        <ul>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Unlimited access to the gym</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Customer Support</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Persnol Trainer</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>Standard Options</li>
                            <li><span><AiTwotoneCheckCircle className='i'/></span>5 Classes per week</li>
                        </ul>
                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Pricing
