import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <div className='about'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="info">
                                <h2 className='main-title'>О нас</h2>
                                <p>Созданный в 2017 году OOO «TehnoPlast» уверенно лидирует в области производства кровельных и стеновых сэндвич панелей с наполнителем из минеральной ваты и пенопласта.

                                    <br /> <br />
                                    Современные технологии производства, квалифицированные кадры и уникальность продукции уже долгое время позволяют считать OOO «TehnoPlast»  ведущим производителем в Узбекистане и соседних городах.
                                </p>
                                <p>Мы заботимся о том, чтобы каждый Заказчик остался доволен предложенным ассортиментом, сервисом и высоким качеством продукции. </p>

                                <div className="myBtn">
                                    <Link className='btn' to='/about'>Подробнее</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <img className='w-100' src="/img/about.jpg" alt="" />
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default About