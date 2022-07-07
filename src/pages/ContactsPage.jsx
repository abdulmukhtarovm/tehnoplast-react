import React, { useEffect, useState } from 'react'

import Request from '../components/Request'

const ContactsPage = () => {
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
          <Request/>
          </>
      }
    </>
  )
}

export default ContactsPage