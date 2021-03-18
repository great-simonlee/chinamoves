import React from 'react';
import styles from './aboutus.module.css';
import AboutAgents from '../aboutus_agents/aboutus_agents';
import AboutusCompany from '../aboutus_company/aboutus_company';

const AboutUs = (props) => (
        <main className={ styles.aboutus }>
            <h1>Hello world!!</h1>
            <h1>This is About Us Page!!</h1>
            <AboutusCompany />
            <AboutAgents />
        </main>    
    );

export default AboutUs;