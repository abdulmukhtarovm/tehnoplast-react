import React from 'react'
import CountUp from 'react-countup';
const InNumbers = () => {
    return (
        <div className='InNumbers'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h2 className="main-title">Мы в цифрах</h2>
                    </div>
                    <div className="col-5 row">
                        <div className="col-4">
                            <div className="wrap">
                                <div className="d-flex align-items-center">
                                    <CountUp start={0} end={1000} duration={1}></CountUp><h6>+</h6>
                                </div>
                                <p>Более <br />поректов</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="wrap">
                                <div className="d-flex align-items-center">
                                    <CountUp end={40} duration={1}></CountUp><h6>+</h6>
                                </div>
                                <p>Специалистов<br /> на заводе</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="wrap">
                                <div className="d-flex align-items-center">
                                    <CountUp end={10} duration={1}></CountUp><h6>+</h6>
                                </div>
                                <p>Менеджеров<br /> в офисе</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="wrap">
                                <div className="d-flex align-items-center">
                                    <CountUp end={5} duration={1}></CountUp><h6>+</h6>
                                </div>
                                <p>Стран <br /> экспорта</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="wrap">
                                <div className="d-flex align-items-center">
                                    <CountUp end={6} duration={1}></CountUp><h6>+</h6>
                                </div>
                                <p>Импортных<br /> оборудований</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="wrap">
                                <div className="d-flex align-items-center">
                                    <CountUp end={10} duration={1}></CountUp><h6>+</h6>
                                </div>
                                <p>Лет <br /> опыта</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InNumbers