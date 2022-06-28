import React from 'react'
import { Link } from 'react-router-dom'

const portfolio = () => {
    return (

        <div className="portfolio">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <h2 className="main-title">Галерея работ</h2>
                        <div className="image-gallary">
                            <div className="image-box">
                                <img src="/img/project1.jpg" alt="" />
                            </div>
                            <div className="image-box">
                                <img src="/img/project2.jpg" alt="" />
                            </div>
                            <div className="image-box">
                                <img src="/img/project4.png" alt="" />
                            </div>
                            <div className="image-box">
                                <img src="/img/project3.jpg" alt="" />
                            </div>
                        </div>
                        <div className="myBtn mt-5">
                            <Link className='btn' to="portfolio">Посмотреть все</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default portfolio