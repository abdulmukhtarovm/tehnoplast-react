import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faFacebookF, faInstagram, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
const NavbarTop = () => {
  return (
    <div className='navbarTop'>
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-5">
                <div className='call'>
               <div className="d-flex flex-column">
               <a href="tel:+998998150303"><FontAwesomeIcon className='icon' icon={faPhone}/>+998 99 815 03 03</a>
                <a href="tel:+998998820909"><FontAwesomeIcon className='icon' icon={faPhone}/>+998 99 882 09 09</a>
               </div>
                <a href="mailto:mail@mail.com"><FontAwesomeIcon className='icon' icon={faEnvelope} /> tehnoplast.uz@mail.ru</a>
                </div>
                
            </div>
            <div className="col-2">
                <div className="socials d-flex justify-content-end">
                    <a href="#"><FontAwesomeIcon className='icon' icon={faFacebookF}/></a>
                    <a href="https://t.me/tehnoPlast"><FontAwesomeIcon className='icon' icon={faTelegramPlane}/></a>
                    <a href="#"><FontAwesomeIcon className='icon' icon={faInstagram}/></a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavbarTop