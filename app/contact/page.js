'use client';

import Image from "next/image";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';


export default function ContactPage() {
    return(
        <>
            <div className="hero-section">
                <div className="content-section-contact gradient-background">
                    <h1>Company Information</h1>
                    <div className="companyInfo">
                        <p><b>Company Name: </b>CreatiVibe Labs</p>
                        <p><b>Address: </b>Office # 1405, 14th Floor, Caeser's Tower, Karachi, Pakistan</p>
                        <p><b>Telephone: </b>+92 3273652556</p>
                        <p><b>Email: </b>creativibelabs@gmail.com</p>
                        <div className="openHours">
                            <b>Office Hours: </b>
                            <p>Mon - Thu: 9:00 AM - 6:00 PM</p>
                            <p>Friday: 9:00 AM - 4:00 PM</p>
                            <p>Sat - Sun: Closed</p>
                        </div>
                    </div>
                </div>
                <div className="image-section">
                    
                </div>
            </div>
            <div className="contactForm whyChooseUsCardContents">
                <ContactForm />
            </div>
        </>
    );
}