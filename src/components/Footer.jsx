import { faFacebookF, faInstagram, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row col-10 ">
                        <h2 className="main-title">Наши контакты</h2>
                        <div className="col-7">
                            <div className="info">
                                <div className="wrap w-50 d-flex align-items-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="text d-flex flex-column">
                                        <span>Наши <span className='colorOrange'>контакты</span>:</span>
                                        <a href='tel:+998998150303'>+998 99 815 03 03</a>
                                        <a href='tel:+998998820909'>+998 99 882 09 09</a>
                                    </div>
                                </div>
                                <div className="wrap w-50 d-flex align-items-center">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className="text d-flex flex-column">
                                        <span>Наш <span className='colorOrange'>адрес</span>:</span>
                                        <a href=''>Город Ташкент, Бектемирский район, Улица Хусайн Байкаро 13А.</a>
                                    </div>
                                </div>

                                <div className="wrap d-flex align-items-center">
                                    <div className="social-media d-flex">
                                        <div className="insta">
                                            <a href="#"> <FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>
                                        <div className="fb">
                                            <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                        </div>
                                        <div className="tg">
                                            <a href=""><FontAwesomeIcon icon={faTelegramPlane} /></a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="map">
                                <iframe className='w-100 h-100' title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d187.51608664052296!2d69.34531860589108!3d41.23795102786353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5f2ad5f82f65%3A0x3e11809d18d033ca!2z0KLQtdGF0L3QvtC_0LvQsNGB0YI!5e0!3m2!1sru!2sus!4v1656072386996!5m2!1sru!2sus" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer