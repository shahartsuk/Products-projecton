import React from 'react';
import { UserMessages } from '../components/UserMessages';
import "../style/contact.css";
export const ContactUs = (props) => {
    return (
        <div className='msg-container'>
            <UserMessages/>
        </div>
    );
}