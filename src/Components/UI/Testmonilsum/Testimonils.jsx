import React from 'react'
import './test.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
import img1 from '../../../assets/img/avatar01.png'
import img2 from'../../../assets/img/avatar02.png'
export default function Testimonils() {
  return (
    <>
      <section>
        <div className="container slider">
          <h2 className="section-title">Testimonials</h2>
        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide_item">
            <div className="slider_img-01">
              <img src= {img1} alt="" />
              
            </div>
            <h4>Amrin Shith</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ab doloribus! Porro sed ipsum possimus beatae aut consectetur. Optio minima animi sequi quasi suscipit! Neque nihil porro aliquid sapiente laudantium?</p>

          </div>
        </SwiperSlide>
        <SwiperSlide> 
        <div className="slider_img-02">
              <img src= {img2} alt="" />
              
            </div>
            <h4>Muhmmed Nishil</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ab doloribus! Porro sed ipsum possimus beatae aut consectetur. Optio minima animi sequi quasi suscipit! Neque nihil porro aliquid sapiente laudantium?</p>
              
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider_img-03">
              <img src= {img2} alt="" />
              
            </div>
            <h4>Ahsan Saleem</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ab doloribus! Porro sed ipsum possimus beatae aut consectetur. Optio minima animi sequi quasi suscipit! Neque nihil porro aliquid sapiente laudantium?</p>
              
          
        </SwiperSlide>
      </Swiper>
        </div>
      </section>
    </>
  );
}

