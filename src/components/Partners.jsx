import React from 'react'
import { Link } from 'react-router-dom'

const Partners = () => {
    return (
        <div className="partners mt-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h2 className="main-title">Наши партнёры</h2>
                    </div>
                    <div className="col-5 row">
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/gh.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/ou7.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/mimar.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner7.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner8.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner9.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="img mb-4">
                                <img className='w-100' src="/img/partner10.png" alt="" />
                            </div>
                        </div>
                        <div className="myBtn">
                            <Link className="btn" to="/about">Посмотреть все</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners