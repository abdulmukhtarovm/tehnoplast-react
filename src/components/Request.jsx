import axios from 'axios'
import React, { useState } from 'react'
import { getText } from '../locales'

const Request = () => {
    const [name, setName] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const [message, setMessage] = useState('')
    const [after, setAfter] = useState(false)

    const sendMessage = (e) => {
        e.preventDefault()
        axios.post("https://tehnoplast.uz/api/", { name, phone_number, message })
            .then((res) => {
                setAfter(true)
                setName("")
                setPhone_number("")
                setMessage("")
                setTimeout(() => {
                    setAfter(false)
                }, 3000)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='request'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <h2 className="main-title">Обратная связь</h2>
                    </div>
                    <div className="col-5">
                        <div className="request-blog">
                            <form onSubmit={sendMessage}>
                                <div className="position-relative">
                                    <input onChange={e => setName(e.target.value)} value={name} required placeholder=" " id="name" className="name form-control" type="text" name="name" />
                                    <label className="contact-label" for="name">{getText("inputName")}</label>
                                </div>

                                <div className="position-relative">
                                    <input onChange={e => setPhone_number(e.target.value)} value={phone_number} required placeholder=" " id="phone" className="phone form-control" type="tel" name="phone_number" />
                                    <label className="contact-label" for="phone">{getText("inputTel")}</label>
                                </div>
                                <div className="position-relative">
                                    <textarea onChange={e => setMessage(e.target.value)} value={message} name='message' required placeholder=" " id="message" className="message form-control textarea" type="text"
                                    ></textarea><label className="contact-label" for="message">{getText("inputMsg")}</label>
                                </div>
                                <div className="myBtn">
                                    <button type='submit' className="btn"> {getText("send")} </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {after ?
                        <div class="myToast ">
                            <div class="card">
                                <div class="card-body">
                                    <h2>Спасибо! Ваша заявка принята.</h2>
                                    <h5>Наш менеджер скоро с вами свяжется</h5>
                                </div>
                            </div>
                        </div>
                        : ''}
                </div>
            </div>
        </div>
    )
}

export default Request