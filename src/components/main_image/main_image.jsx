import React from 'react';
import styles from './main_image.module.css';

const MainImage = (props) => (
            <div className={ styles.mainImgContainer }>
                <img className={ styles.mainImg } src={ process.env.PUBLIC_URL + "/images/main_image.jpg" } alt="main_image"/>
                <p className={ styles.mainImgText }>MAKE YOUR BEST MOVE</p>
            </div>
    );

export default MainImage;