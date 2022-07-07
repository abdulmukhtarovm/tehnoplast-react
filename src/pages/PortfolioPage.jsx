import React, { useEffect, useState } from 'react'


const PortfolioPage = () => {
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
       
          </>
      }
    </>
  )
}

export default PortfolioPage