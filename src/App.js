import React from 'react'

import HeaderSlider from './components/HeaderSlider'
import About from './components/About'
import Advantages from './components/Advantages'
import InNumbers from './components/InNumbers'
import Portfolio from './components/Portfolio'
import Partners from './components/Partners'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const App = () => {
  return (
    <>
      <HeaderSlider/>
      <About/>
      <InNumbers/>
      <Advantages/>
      <Portfolio/>
      <Partners/>
    </>
  )
}

export default App