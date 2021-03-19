import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Header from '../components/header/header';
import ContactusHeader from '../components/contactus/contactus_header/contactus_header';
import ContactusContent from '../components/contactus/contactus_content/contactus_content';
import Footer from '../components/footer/footer';

const options = {
    position: 'top center',
    timeout: 5000,
    offset: '150px',
    transition: 'fade',
}

const ContactPage = (props) => (
    <AlertProvider template={AlertTemplate} {...options}>
        <Header />
        <ContactusHeader />
        <ContactusContent />
        <Footer />
    </AlertProvider>
    );

export default ContactPage;