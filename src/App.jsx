import React, { useEffect } from 'react'
import './App.css'
import Aos from 'aos'
import Header from './Components/Header/Header'
import Hero from './Components/UI/Hero'
import Exexices from './Components/UI/Exerices/Exexices'
import Start from './Components/UI/Start/Start'
import Pricing from './Components/UI/Pricing/Pricing'
import Testimonils from './Components/UI/Testmonilsum/Testimonils'
import Footer from './Components/UI/Footer/Footer'



function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Header/>
      <Hero/>
      <Exexices/>
      <Start/>
      <Pricing/>
      <Testimonils/>
      <Footer/>
    </>
  )
}

export default App
