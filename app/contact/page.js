'use client';

import Image from "next/image";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';


export default function ContactPage() {
    return(
        <>
            <div className="hero-section contact">
                <div className="content-section-contact  gradient-background">
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
                <div className="image-section border-[1px] border-amber-50 rounded-2xl p-4">
                    <iframe
                        width="100%"
                        height="441"
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.179816753767!2d67.04083572379122!3d24.857707420854073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5125392865%3A0x94d6b804727306b0!2sCreatiVibe%20Labs!5e0!3m2!1sen!2s!4v1752566721319!5m2!1sen!2s"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            <div className="contactForm whyChooseUsCardContents">
                <ContactForm />
            </div>
        </>
    );
}