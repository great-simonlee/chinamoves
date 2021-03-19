import React from 'react';
import styles from './contactus_header.module.css';

const ContactusHeader = (props) => (
    <>
        <div className={ styles.contactTitle }>
            <img className={ styles.contactImg } src="/chinamoves/images/contactus_banner.jpg" alt="contactus"/>
            <div className={ styles.contactImgText }>
                <span className={ styles.contactImgTextTitle }>Contact Us</span><br />
                <span className={ styles.contactImgTextDesc }>We are here to help you!!</span>
            </div>
        </div>
</>
    );

export default ContactusHeader;