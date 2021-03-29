import React from 'react';
import mainPic from '../../../images/main_image.jpg'
import styles from './main_image.module.css';

const MainImage = (props) => (
            <div className={ styles.mainImgContainer }>
                <img className={ styles.mainImg } src={ mainPic } alt="main_image"/>
                <p className={ styles.mainImgText }>MAKE YOUR BEST MOVE</p>
            </div>
    );

export default MainImage;