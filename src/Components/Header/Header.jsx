import React, { useEffect, useRef } from 'react'
import logo from '../../assets/img/dumble.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import './header.css'

const nav_link=[
    {
        path : "#home",
        display: "Home"
    },
    {
        path : "#shedule",
        display: "Schedule"
    },
    {
        path : "#classes",
        display: "Classes"
    },
    {
        path : "#price",
        display: "Pricing"
    },
]
function Header() {
    const headerRef = useRef(null)

    const headerFunc = ()=>{
        if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
            headerRef.current.classList.add('sticky_header')
        }else{
            headerRef.current.classList.remove('sticky_header')

        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',headerFunc)
        return ()=>window.removeEventListener('scroll',headerFunc)
    },[])
    const handleClick= e =>{
        e.preventDefault(e)
        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop
        window.scrollTo({
            left : 0,
            top :location - 80,
        })
    }
  return (
    <header className='header'ref={headerRef}>
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <div className="logo_img"><img src={logo} alt="" /></div>
                    <h2>BodyFit</h2>
                </div>
                {/* =================Navigation================= */}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_link.map(item=>(
                                <li className="nav_item"><a onClick={handleClick} href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                {/* ====================Nav-Right====================== */}
                <div className="nav_right">
                    <button className='register_btn'>Register</button>
                    <span className="mobile_menu"><GiHamburgerMenu/></span>
                </div>
            </div>
        </div>
      
    </header>
  )
}

export default Header
