import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styles from './header.module.css';
import Modal from 'react-modal';

const Header = ({ authService }) => {
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
    };

    return (
        <>
            <header className={ styles.header }>
                <div className={ styles.logo } onClick={ () => {history.push("/chinamoves/")} }>
                    <img className={ styles.logoImg } src="/chinamoves/images/logo.png" alt="ChinaMoves"/>
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
            <Modal isOpen={ modalIsOpen } shouldCloseOnOverlayClick={ true } onRequestClose={ () => {setModalIsOpen(false)} } style={ modalStyle }>
                <div className={ styles.closeBtnBox }>
                    <button className={ styles.closeBtn } onClick={ () => {setModalIsOpen(false)} }><i className="fas fa-times closeIcon"></i></button>
                </div>
                <section className={ styles.loginInfo }>
                    <div className={ styles.loginInfoTitle }>Member Login</div>
                    <div className={ styles.loginInputBox }>
                        <i className="fas fa-envelope"></i><input className={ styles.loginInput } type="text" placeholder="Email"/>
                    </div>
                    <div className={ styles.loginInputBox }>
                        <i className="fas fa-key"></i><input className={ styles.loginInput } type="text" placeholder="Password"/>
                    </div>
                    <button className={ styles.loginSubmit }>LOGIN</button>
                    <div className={ styles.forgotIDPW }>Forgot Username / Password?</div>
                    <div className={ styles.signinBtn }>Create your Account <i className="fas fa-arrow-right"></i></div>
                    <p className={ styles.divider }>OR</p>
                </section>
                <section className={ styles.snslogin }>
                    <div className={ styles.facebook } onClick={ onLogin } id="Facebook">
                        <div className={ styles.facebookIcon }><i className="fab fa-facebook-f"></i></div>
                        <div className={ styles.facebookBtn }><p>LOGIN WITH FACEBOOK</p></div>
                    </div>
                    <div className={ styles.google } onClick={ onLogin } id="Google">
                        <div className={ styles.googleIcon }><i className="fab fa-google"></i></div>
                        <div className={ styles.googleBtn }><p>LOGIN WITH GOOGLE</p></div>
                    </div>
                </section>
            </Modal>
        </>
);}

export default Header;