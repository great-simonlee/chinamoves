import React from 'react';
import styles from './main_lastest_nyc_listings.module.css';

const MainLastestNycListings = (props) => (
    <>
        <div className={ styles.title }>
            <h1>最新房源：纽约-曼哈顿</h1>
        </div>
        <div className={ styles.listingContainer }>
            <div className={ styles.listingCard }>
                <img src="/images/listing_item.jpeg"/>
                <div>
                    <span>606 57th St</span>
                    <div>
                        <span>Studio</span>
                        <span>$2,500 / Month</span>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
    );

export default MainLastestNycListings;