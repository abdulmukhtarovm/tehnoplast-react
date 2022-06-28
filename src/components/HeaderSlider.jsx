import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay, Navigation } from "swiper";

const HeaderSlider = () => {
    return (
        <div className='headerSlider'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                // autoplay={{
                //     delay: 56000,
                //     disableOnInteraction: false,
                // }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper">

                <SwiperSlide className="first-slide">
                    <div className="blur"></div>
                    <div className="container z-2">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-5">
                                <div className="card product-card">
                                    <h2>Мы лучшие <span>специалисты</span> в сфере строительства</h2>
                                    <p>Созданный в 2012 году OOO«TehnoPlast» уверенно лидирует в области производства сэндвич панелей и пенопласта.</p>
                                    <div className="myBtn">
                                        <a className="btn" href="tel:+998998150303">Заказать</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 d-flex align-items-center justify-content-end">
                                <div className="img-card kottaro">
                                    <div className="img">
                                        <img className="w-100" src="/img/we.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  className="second-slide">
                    <div className="blur"></div>
                    <div className="row align-items-center justify-content-center position-relative">
                        <div className="col-5">
                            <div className="card product-card ">
                                <h2>Фасадный декор из <span>пенопласта</span></h2>
                                <p>Теплоизоляционные свойства пенопласта нашли применение в покрытии стен. Лёгкость обработки материала позволило делать фасадный декор из пенопласта, заменив такие материалы, как хрупкий гипс, дорогой мрамор, тяжёлый бетон.</p>
                                <div className="myBtn">
                                    <a className="btn" href="tel:+998998150303">Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 d-flex align-items-center">
                            <div className="img-card kichkinaro">
                                <div className="img1">
                                    <img className="w-100" src="/img/headerslide2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="third-slide">
                    <div className="blur"></div>
                    <div className="container z-2">
                        <div className="row align-items-center justify-content-left">
                            <div className="col-5">
                                <div className="card product-card">
                                    <h2><span>Пенопласт</span> для тепло и шумоизоляции</h2>
                                    <p>Шумоизоляция пенопластом - бюджетное мероприятие, подходящие для снижения уровня слышимости в обычных условиях. <br />
                                        Строители широко используют пенопласт для тепло - и звукоизоляции частных домов, квартир в многоэтажных домах, крупных строительных объектов.</p>
                                    <div className="myBtn">
                                        <a className="btn" href="tel:+998998150303">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="fourth-slide">
                    <div className="blur"></div>
                    <div className="container z-2">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-5">
                                <div className="card product-card">
                                    <h2><span>Сендвич панели</span> из пенопласта, из минеральной ваты</h2>
                                    <p>Мы предоставляем сендвич панели высокого стандарта для ваших бизнес-решений и конструкторов.</p>
                                    <div className="myBtn">
                                        <a className="btn" href="tel:+998998150303">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="img-card">
                                    <div className="img4">
                                        <img className="w-100" src="/img/head123.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>



        </div>
    )
}

export default HeaderSlider
