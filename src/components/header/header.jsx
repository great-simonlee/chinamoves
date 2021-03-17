import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
        <header className={ styles.header }>
            <div className={ styles.logo }>
                <img className={ styles.logoImg } src={ process.env.PUBLIC_URL + "/images/logo.png" } alt="ChinaMoves"/>
                <p className={ styles.logoText }>CHINA</p><p className={ styles.logoTextMid }>MOVES</p><p className={ styles.logoText }>USA</p><p className={ styles.logoTextEnd }>.com</p>
            </div>
            <div className={ styles.headerBtn }>
                <p className={ styles.Btn }>关于我们</p>
                <p className={ styles.Btn }>房源</p>
                <p className={ styles.Btn }>转租</p>
                <p className={ styles.Btn }>找室友</p>
                <p className={ styles.Btn }>金牌经纪人</p>
                <p className={ styles.Btn }>联系我们</p>
                <p className={ styles.Btn }>注册/登陆</p>
            </div>
        </header>
    );

export default Header;