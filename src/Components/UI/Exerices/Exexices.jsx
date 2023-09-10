import React from 'react'
import icon1 from '../../../assets/img/lunges.png'
import icon2 from '../../../assets/img/trainer.png'
import icon3 from '../../../assets/img/yoga-pose.png'
import './exerices.css'

function Exexices() {
  return (
    <section id='shedule'>
      <div className="container exercies_container">
        <div className="exercies_top">
          <h2 className="section_title">
            Benifit of <span className='hightlight'>Exercies</span>
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nam aperiam <br />, voluptate iusto necessitatibus tempore.</p>
        </div>
        {/* =======================Exircies List========================== */}
        <div className="exerices_wrapper">
          <div className="exerices_item" data-aos='zoom-in'  data-aos-duration='1500'>
            <span className="exerices_icon">
              <img src= {icon1} alt="" />
            </span>
            <div className="exercies_contant">
              <h4>Healthy Life</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vitae similique vel odit veritatis nisi?</p>
            </div>
          </div>

          <div className="exerices_item" data-aos='zoom-in'  data-aos-duration='1500'>
            <span className="exerices_icon">
              <img src= {icon3} alt="" />
            </span>
            <div className="exercies_contant">
              <h4>Increased Flexibility</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vitae similique vel odit veritatis nisi?</p>
            </div>
          </div>

          <div className="exerices_item"data-aos='zoom-in'  data-aos-duration='1500'>
            <span className="exerices_icon">
              <img src= {icon2} alt="" />
            </span>
            <div className="exercies_contant">
              <h4>Reducing Blood Pressure</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vitae similique vel odit veritatis nisi?</p>
            </div>
          </div>

        </div>
      </div>
      
    </section>
  )
}

export default Exexices
