import React from 'react'
// import React, { useState } from 'react'
import { getLanguage, getText } from '../locales/index'
import { LANGUAGE } from '../tools/constants';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value)
    document.location.reload(true)
  }
  const location = useLocation()
  return (
    <>
      <div className="navBar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-2">
              <div className="logo">
                <Link to="/"><img className='w-100' src="/img/Logo.png" alt="" /></Link>
              </div>
            </div>
            <div className="col-6">
              <ul className="nav-menu d-flex justify-content-around">
                <li><Link to="/" className={`${location.pathname === '/' ? 'active-link' : ''}`}>главная</Link></li>
                <li><Link to="/about" className={`${location.pathname === '/about' ? 'active-link' : ''}`}>{getText("aboutcompany")}</Link></li>
                <li><Link to="/catalog" className={`${location.pathname === '/catalog' ? 'active-link' : ''}`}>каталог</Link></li>
                <li><Link to="/portfolio" className={`${location.pathname === '/portfolio' ? 'active-link' : ''}`}>наши объекты</Link></li>
                {/* <li><Link to="/">блог</Link></li> */}
                <li><Link to="/contacts" className={`${location.pathname === '/contacts' ? 'active-link' : ''}`}>контакты</Link></li>
                <li>
                  <select className='siteLang' onChange={changeLanguage}>
                    <option value="ru" selected={getLanguage() === "ru"} >Ру</option>
                    <option value="uz" selected={getLanguage() === "uz"} >Uz</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar