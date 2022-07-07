import React, { useEffect, useState } from 'react'


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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1600);
  }, []);
  return (
    <>


      {
        isLoading ?
          <>

            <div id="preloader">
            <span class="loader"></span>
            </div>
          </>
          :
          <div className="app">
            <HeaderSlider />
            <About />
            <InNumbers />
            <Advantages />
            <Portfolio />
            <Partners />
          </div>
      }
    </>
  )
}

export default App