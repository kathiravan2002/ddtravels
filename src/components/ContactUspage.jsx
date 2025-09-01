import React, { useState } from 'react'
import ContactUs from '../shared/components/ContactUs'

function ContactUspage() {
  
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneno: "",
        message: ''
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, email, phoneno, message } = formData;
        const phoneNumber = '+918925530559'; // e.g., +919876543210
        const whatsappMessage = `***** Contact Request *****
• Name: ${firstname} ${lastname}
• Email: ${email}
• Phone No: ${phoneno}
• Message: ${message}
                               `;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl);
    };
  return (
    <div><ContactUs formData={formData} handleSubmit={handleSubmit} handleChange={handleChange}/></div>
  )
}

export default ContactUspage