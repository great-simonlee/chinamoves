import React, { createRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './contactus_content.module.css';
import contactLocPic from '../../../images/contactus_location.png';
import wechatQRPic from '../../../images/wechatQR.jpg';
import { useAlert } from 'react-alert';

const ContactusContent = (props) => {
    const nameRef = createRef();
    const emailRef = createRef();
    const msgRef = createRef();
    const alert = useAlert();

    const sendEmail = (e) => {
        e.preventDefault();

        if (nameRef.current.value !== undefined && emailRef.current.value !== undefined && msgRef.current.value) {
            emailjs.sendForm('service_un17shn', 'template_21bsdkc', e.target, 'user_02aBegGFQaEbfNQTDpYLP')
                .then((result) => {console.log(result.text)}, (error) => {console.log(error.text)});
            alert.success(`Successfully sent`)
        } else {
            alert.error(`no empty space allowed`)
            return null
        }

        e.target.reset();
    };

    const visibleWechat = () => {
        const qr = document.querySelector("#wechatQR");
        qr.style.visibility = "visible";
    }

    const onClose = () => {
        const qr = document.querySelector("#wechatQR");
        qr.style.visibility = "hidden";
    }

    return (
        <section className={ styles.contactPage }>
            <div className={ styles.contactBody }>
                <div>
                    <form className={ styles.submitForm } onSubmit={ sendEmail }>
                        <label className={ styles.submitFormLabel } htmlFor="name">Name&nbsp;<i className="fas fa-asterisk" style={{color: "red", fontSize: 8, marginBottom: 5}}></i></label>
                        <input ref={nameRef} className={ styles.submitFormInput } type="text" name="name" id="name"/>
                        <label className={ styles.submitFormLabel } htmlFor="contactEmail">Email&nbsp;<i className="fas fa-asterisk" style={{color: "red", fontSize: 8, marginBottom: 5}}></i></label>
                        <input ref={emailRef} className={ styles.submitFormInput } type="email" name="email" id="contactEmail"/>
                        <label className={ styles.submitFormLabel } htmlFor="sns">WeChat / Phone number</label>
                        <input className={ styles.submitFormInput } type="text" name="sns" id="sns"/>
                        <label className={ styles.submitFormLabel } htmlFor="message">Message&nbsp;<i className="fas fa-asterisk" style={{color: "red", fontSize: 8, marginBottom: 5}}></i></label>
                        <textarea ref={msgRef} className={ styles.submitFormInput } name="message" id="message" cols="30" rows="9" ></textarea>
                        <button className={ styles.submitFormBtn } type="submit">Ask Our Expert</button>
                    </form>
                </div>
                <div>
                    <div className={ styles.contactInfo }>
                        <div className={ styles.contactInfoDiv }>
                            <i className="fas fa-map-marker-alt" style={{color: "#ea4335"}}></i>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;1133 Broadway, New York, NY, 10010</span>
                        </div>
                        <div className={ styles.contactInfoDiv }>
                            <i className="fas fa-phone-alt" style={{color: "#34da4f"}}></i>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;(857) 222-1383</span>
                        </div>
                        <div className={ styles.contactInfoDiv }>
                            <i className="far fa-envelope" style={{color: "#adcae6"}}></i>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;Rainie@newyorkmovesre.com</span>
                        </div>
                        <div id='wechatQR' className={ styles.wechatQR }>
                            <img className={ styles.wechatQRImg } src={ wechatQRPic } alt="WeChat QR"/>
                            <button className={ styles.closeBtn } onClick={ onClose }><i className={`fas fa-times closeIcon ${styles.closeIcon}`}></i></button>
                        </div>
                        <div className={ styles.contactInfoDivSNS }>
                            <button className={ styles.wechatBtn } onClick={ visibleWechat }><i className={`fab fa-weixin ${ styles.wechat }`} style={{color: "#7bb32e"}}></i></button>
                            <a href="https://www.facebook.com/newyorkmovesre" target="_blank" rel="noreferrer"><i className="fab fa-facebook" style={{color: "#4267B2"}}></i></a>
                            <a href="https://www.instagram.com/newyorkmovesteam/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square" style={{color: "#E1306C"}}></i></a>
                            <a href="https://newyorkmovesre.com/" target="_blank" rel="noreferrer"><i className="fas fa-compass" style={{color: "#0FB5EE"}}></i></a>
                            <a href="https://www.linkedin.com/company/new-york-moves/about/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" style={{color: "#2867B2"}}></i></a>
                        </div>
                    </div>
                    <div className={ styles.location }>
                        <img className={ styles.locationImg } src={ contactLocPic } alt="location"/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactusContent;