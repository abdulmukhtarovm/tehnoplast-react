import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const About = () => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className='about'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                     
                        <div className="col-5">
                            <img className='w-100' src="/img/about1.jpg" alt="" />
                        </div>

                        <div className="col-5">
                            <div className="info">
                                <h4 className='main-title'>Основные виды деятельности и услуг:</h4>
                         
                                    <ul>
                                        <li>Производственные здания;</li>
                                        <li>Склады и терминалы;</li>
                                        <li>Объекты энергетики;</li>
                                        <li>Торговые центры, комплексы, магазины;</li>
                                        <li>Объекты пищевой промышленности, холодильные камеры;</li>
                                        <li>Культурно-зрелищные объекты, спортивные сооружения;</li>
                                        <li>Объекты транспорта: автосалоны, автоцентры, автомойки;</li>
                                        <li>Производственные и технологические здания нефтегазового комплекса;</li>
                                        <li>Объекты сельскохозяйственного назначения.</li>
                                        <li>Логистические центры;</li>

                                    </ul> <br />

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About