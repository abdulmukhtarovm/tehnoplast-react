import React, { useEffect, useState } from 'react'

import Catalog from '../components/Catalog'

const CatalogPage = () => {
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
           <Catalog/>
          </>
      }
    </>
  )
}

export default CatalogPage