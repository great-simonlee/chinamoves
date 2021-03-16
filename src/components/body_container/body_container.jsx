import React from 'react';
import MainImage from '../main_image/main_image';
import MainListingContainer from '../main_listingContainer/main_listingContainer';
import styles from './body_container.module.css';

const BodyContent = (props) => (
        <main className={ styles.main }>
            <MainImage />
            <MainListingContainer />
        </main>
    );

export default BodyContent;