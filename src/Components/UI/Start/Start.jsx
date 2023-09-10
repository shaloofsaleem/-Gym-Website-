import React from 'react'
import trainImg from '../../../assets/img/trainer.png'
import './start.css'

function Start() {
  return (
    <section id='classes'>
        <div className="container" >
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={trainImg} data-aos='fade-left'  data-aos-duration='1500' alt="" />
                </div>
                <div className="start_contant" data-aos='fade-right'  data-aos-duration='1500'>
                    <h2 className="section_title">
                        Ready to Make a <span className="highlight">change ?</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa porro officiis minima necessitatibus quod fugit voluptates expedita possimus natus suscipit, architecto ex neque ipsum, autem repudiandae asperiores pariatur quo temporibus?</p>
                        <button className="register_btn">Get started</button>
                    </h2>
                </div>
            </div>
        </div>

      
    </section>
  )
}

export default Start
