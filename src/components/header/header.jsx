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
    const loginEmailRef = useRef();
    const passwordEmailRef = useRef();

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
            .then((result) => console.log(result))
            .then(setModalIsOpen(false))
            .catch((err) => {console.log(err)})
    };

    const onEmailLogin = (event) => {
        event.preventDefault();

        let email = loginEmailRef.current.value;
        let password = passwordEmailRef.current.value;

        authService //
            .loginEmail(email, password)
            .then((result) => console.log(result))
            .then(setModalIsOpen(false))
            .catch((err) => console.log(err))
    }


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
            .then(proceedToEmailVerification)
            .catch((err) => {console.log(err)})
    };

    const sendEmailVerification = () => {
        authService.sendVerificaiton();
        document.getElementById("verifyEmailMsg").innerHTML = "We sent an email to make sure you own it. Please check your inbox and follow the instructions to finish setting up your account."
        // setModalIsOpen(false);
    }

    const changePageUserLogin = () => {
        authService //
            .signInUser((user) => {
                if (user) {
                    if (user.emailVerified === false) {
                        setModalIsOpen(true);
                        proceedToEmailVerification();
                    }
                    console.log(user)
                    console.log(user.email)
                    console.log(user.emailVerified)
                    document.getElementById("logIn").style.display = "none";
                    document.getElementById("logOut").style.display = "block";
                } else {
                    document.getElementById("logIn").style.display = "block";
                    document.getElementById("logOut").style.display = "none";
                }
            })
    }

    const logOut = () => {
        authService.logout() //
            .catch((err) => console.log(err))
    }

    const loadSignUpPage = () => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("snsBox").style.display = "none";
        document.getElementById("userSignUpForm").style.display = "flex";
        document.getElementById("emailVerification").style.display = "none";
    };

    const proceedToEmailVerification = () => {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("snsBox").style.display = "none";
        document.getElementById("userSignUpForm").style.display = "none";
        document.getElementById("emailVerification").style.display = "flex";
    };

    const backToLogin = () => {
        document.getElementById("loginBox").style.display = "flex";
        document.getElementById("snsBox").style.display = "block";
        document.getElementById("userSignUpForm").style.display = "none";
        document.getElementById("emailVerification").style.display = "none";
    };

    return (
        <>
            <header className={ styles.header } onLoad={ changePageUserLogin }>
                <div className={ styles.logo } onClick={ () => {history.push("/")} }>
                    <img className={ styles.logoImg } src={ logo } alt="ChinaMoves"/>
                    <p className={ styles.logoText }>CHINA</p><p className={ styles.logoTextMid }>MOVES</p><p className={ styles.logoText }>USA</p><p className={ styles.logoTextEnd }>.com</p>
                </div>
                <div className={ styles.headerBtn }>
                    <p className={ styles.Btn } onClick={ () => {history.push("/aboutus")} }>关于我们</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/listings")} }>房源</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/sublet")} }>转租</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/roommate")} }>找室友</p>
                    <p className={ styles.Btn } onClick={ () => {history.push("/contactus")} }>联系我们</p>
                    <p id="logIn" className={ styles.Btn } onClick={ () => {setModalIsOpen(true)} }>注册/登陆</p>
                    <p id="logOut" className={ styles.Btn } onClick={ logOut }>退出当前账号</p>
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
                            <i className="fas fa-envelope"></i><input ref={ loginEmailRef } className={ styles.loginInput } type="email" placeholder="Email" />
                        </div>
                        <div className={ styles.loginInputBox }>
                            <i className="fas fa-key"></i><input ref={ passwordEmailRef } className={ styles.loginInput } type="password" placeholder="Password" />
                        </div>
                        <button className={ styles.loginSubmit } onClick={ onEmailLogin }>LOGIN</button>
                    </form>
                    <div className={ styles.forgotIDPW }>Forgot Username / Password?</div>
                    <div className={ styles.signinBtn } onClick={ loadSignUpPage }>Create your Account <i className="fas fa-arrow-right"></i></div>
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
                    <div className={ styles.signUpTitle }>Welcome to Join Us</div>
                    <form ref={ formRef }>
                        <div className={ styles.signUpInputBox }>
                            <input ref={ emailRef } type="email" className={ styles.signUpInputBoxElement } id="email" placeholder="Email..." required/>
                        </div>
                        <div className={ styles.signUpInputBox }>
                            <input ref={ passwordRef } type="password" className={ styles.signUpInputBoxElement } id="password" placeholder="Password..." required/>
                        </div>
                        <div className={ styles.signUpInputBox }>
                            <input type="password" className={ styles.signUpInputBoxElement } id="conPassword" placeholder="Confirm Password..." required/>
                        </div>
                        <div className={ styles.signUpInputBox }>
                            <input ref={ firstnameRef } type="text" className={ styles.signUpInputBoxElement } id="firstname" placeholder="First Name..." required/>
                        </div>
                        <div className={ styles.signUpInputBox }>
                            <input ref={ lastnameRef } type="text" className={ styles.signUpInputBoxElement } id="lastname" placeholder="Last Name..." required/>
                        </div>
                        <div className={ styles.signUpInputBox }>
                            <input ref={ numberRef } type="tel" className={ styles.signUpInputBoxElement } id="phoneNumber" placeholder="PhoneNumber..." pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"/>
                        </div>
                        <button className={ styles.pageBtn } onClick={ userSignUp }>Sign Up</button>
                    </form>
                    <button className={ styles.pageBtnBack } onClick={ backToLogin }>Back to LogIn</button>
                </section>
                <section id="emailVerification" className={ styles.emailVerification }>
                    <div className={ styles.verifyTitle } >Email Verification</div>
                    <span className={ styles.verifyDesc } >Please verify your email to get the full access to the website.</span>
                    <button className={ styles.verifyBtn }  onClick={ sendEmailVerification }><span>Verify Your Email</span></button>
                    <span id="verifyEmailMsg" className={ styles.verifyDesc } ></span>
                </section>
            </Modal>
        </>
);}

export default Header;