import React from 'react';
import styles from './main_listingContainer.module.css';
import MainLastestBostonListings from '../main_lastest_boston_listings/main_lastest_boston_listings';
import MainLastestNycListings from '../main_lastest_nyc_listings/main_lastest_nyc_listings';

const MainListingContainer = (props) => (
    <div className={ styles.listings }>
        <MainLastestNycListings />
        <MainLastestBostonListings />
    </div>
    );

export default MainListingContainer;