import React, { useEffect, useState } from 'react'

import About from '../components/About'
import About1 from '../components/About1'
import Partner from '../components/Partner'
import Portfolio from '../components/Portfolio'

const AboutPage = () => {
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
          <>
            <About />
            <About1 />
            <Partner />
            <Portfolio />
          </>
      }
    </>
  )
}

export default AboutPage