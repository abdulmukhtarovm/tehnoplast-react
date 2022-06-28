import React from 'react'
import { faClock, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faRecycle } from '@fortawesome/free-solid-svg-icons'

const Advantages = () => {
    return (
        <div className='advantages'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h2 className='main-title'>Наши преимущества</h2>
                    </div>
                    <div className="col-5 row">
                        <div className="col-6">
                            <div className="card">
                                <div className="card-top">
                                    <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                                </div>
                                <div className="card-body">
                                    <h3>КАЧЕСТВО</h3>
                                    <h6>Самое современное оборудование и высокое качество производства </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-top">
                                    <FontAwesomeIcon className='icon' icon={faRecycle} />
                                </div>
                                <div className="card-body">
                                    <h3>ПРОИЗВОДСТВО</h3>
                                    <h6>Многолетний опыт с применением новейших технологий.</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-top">
                                    <FontAwesomeIcon className='icon' icon={faDollarSign} />
                                </div>
                                <div className="card-body">
                                    <h3>НИЗКАЯ ЦЕНА</h3>
                                    <h6>Качественный материал по низким ценам</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">
                                <div className="card-top">
                                    <FontAwesomeIcon className='icon' icon={faClock} />
                                </div>
                                <div className="card-body">
                                    <h3>СРОК</h3>
                                    <h6>Кратчайшие сроки изготовления</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advantages