import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ContactusHeader from '../components/contactus/contactus_header/contactus_header';
import ContactusContent from '../components/contactus/contactus_content/contactus_content';

const options = {
    position: 'top center',
    timeout: 5000,
    offset: '150px',
    transition: 'fade',
}

const ContactPage = (props) => (
    <AlertProvider template={AlertTemplate} {...options}>
        <ContactusHeader />
        <ContactusContent />
    </AlertProvider>
    );

export default ContactPage;