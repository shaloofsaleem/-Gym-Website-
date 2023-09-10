import React from 'react'
import './footer.css'
import logo from '../../../assets/img/dumble.png'


function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className="footer"  data-aos='fade-up'  data-aos-duration='1500'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="logo">
                        <div className="logo_img"><img src={logo} alt="" /></div>
                        <h2>BodyFit</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis incidunt iste eius provident odio in!</p>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">
                        Company
                    </h4>
                    <ul className="footer_links" >
                        <li><a href="">Our Program</a></li>
                        <li><a href="">Our Plan</a></li>
                        <li><a href="">Become a Member</a></li>
                    </ul>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">
                        Quick Links
                    </h4>
                    <ul className='footer_links'>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
                <div className="footer_box">
                    <h4 className="footer_title">
                        Quick Links
                    </h4>
                    <ul className="footer_links">
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                        <li><a href="">Support</a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>Copyright -{year} developed by AutoByte. All right reserved.</p>
        </div>
      
    </footer>
  )
}

export default Footer
