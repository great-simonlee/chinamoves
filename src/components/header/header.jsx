import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import styles from './header.module.css';
import Modal from 'react-modal';
import logo from '../../images/logo.png';

const Header = ({ authService }) => {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const numberRef = useRef();
    const history = useHistory();

    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const modalStyle = {
        overlay: {
            position: 'fixed',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            height: '580px',
            width: '400px'
        }
    }

    const onLogin = (event) => {
        authService //
            .login(event.currentTarget.id)
            .then((result) => console.log(result.user.displayName))
            .catch((err) => {console.log(err)})
    };

    const signUpPageLoad = () => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("snsBox").style.display = "none";
        document.getElementById("userSignUpForm").style.display = "flex";
    };

    const userSignUp = (event) => {
        event.preventDefault();

        const newUser = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            phoneNumber: numberRef.current.value,
        };

        authService //
            .createUser(newUser)
            .then((result) => console.log(result))
            .then(formRef.current.reset())
            .then(backToLogin)
            .catch((err) => {console.log(err)})
    };

    const backToLogin = () => {
        document.getElementById("loginBox").style.display = "flex";
        document.getElementById("snsBox").style.display = "block";
        document.getElementById("userSignUpForm").style.display = "none";
    }

    return (
        <>
            <header className={ styles.header }>
                <div className={ styles.logo } onClick={ () => {history.push("/chinamoves/")} }>
                    <img className={ styles.logoImg } src={ logo } alt="ChinaMoves"/>
                    <p className={ styles.logoText }>CHINA</p><p className={ styles.logoTextMid }>MOVES</p><p className={ styles.logoText }>USA</p><p className={ styles.logoTextEnd }>.com</p>
                </div>
                <div className={ styles.headerBtn }>
                    <p className={ styles.Btn } onClick={ () => {history.push("/chinamoves/aboutus")} }>关于我们</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/chinamoves/listings")} }>房源</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/chinamoves/sublet")} }>转租</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/chinamoves/roommate")} }>找室友</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/chinamoves/contactus")} }>联系我们</p>
                    <p className={ styles.Btn } onClick={ () => {setModalIsOpen(true)} }>注册/登陆</p>
                </div>
            </header>
            <Modal isOpen={ modalIsOpen } shouldCloseOnOverlayClick={ true } onRequestClose={ () => {setModalIsOpen(false)} } style={ modalStyle } id="modalBox">
                <div className={ styles.closeBtnBox }>
                    <button className={ styles.closeBtn } onClick={ () => {setModalIsOpen(false)} }><i className="fas fa-times closeIcon"></i></button>
                </div>
                <section id="loginBox" className={ styles.loginInfo }>
                    <div className={ styles.loginInfoTitle }>Member Login</div>
                    <form>
                        <div className={ styles.loginInputBox }>
                            <i className="fas fa-envelope"></i><input className={ styles.loginInput } type="email" placeholder="Email"/>
                        </div>
                        <div className={ styles.loginInputBox }>
                            <i className="fas fa-key"></i><input className={ styles.loginInput } type="password" placeholder="Password"/>
                        </div>
                        <button className={ styles.loginSubmit }>LOGIN</button>
                    </form>
                    <div className={ styles.forgotIDPW }>Forgot Username / Password?</div>
                    <div className={ styles.signinBtn } onClick={ signUpPageLoad }>Create your Account <i className="fas fa-arrow-right"></i></div>
                    <p className={ styles.divider }>OR</p>
                </section>
                <section id="snsBox" className={ styles.snslogin }>
                    <div className={ styles.facebook } onClick={ onLogin } id="Facebook">
                        <div className={ styles.facebookIcon }><i className="fab fa-facebook-f"></i></div>
                        <div className={ styles.facebookBtn }><p>LOGIN WITH FACEBOOK</p></div>
                    </div>
                    <div className={ styles.google } onClick={ onLogin } id="Google">
                        <div className={ styles.googleIcon }><i className="fab fa-google"></i></div>
                        <div className={ styles.googleBtn }><p>LOGIN WITH GOOGLE</p></div>
                    </div>
                </section>
                <section id="userSignUpForm" className={ styles.userSignUpForm }>
                    <form ref={ formRef }>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input ref={ emailRef } type="email" id="email"/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input ref={ passwordRef } type="password" id="password"/>
                        </div>
                        <div>
                            <label htmlFor="conPassword">Confirm Password: </label>
                            <input type="password" id="conPassword"/>
                        </div>
                        <div>
                            <label htmlFor="firstname">First Name: </label>
                            <input ref={ firstnameRef } type="text" id="firstname"/>
                        </div>
                        <div>
                            <label htmlFor="lastname">Last Name: </label>
                            <input ref={ lastnameRef } type="text" id="lastname"/>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number: </label>
                            <input ref={ numberRef } type="tel" id="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
                        </div>
                        <button onClick={ userSignUp }>SIGN UP</button>
                    </form>
                    <button onClick={ backToLogin }>Back to LogIn</button>
                </section>
            </Modal>
        </>
);}

export default Header;