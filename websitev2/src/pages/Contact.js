import React, {useEffect}  from 'react'
import '../styles/Contact.css'

function Contact() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <h3>Are you passionate about electric motorcycle design and racing? Have any questions about what we do and what we stand for? We'd love to connect with you! Let's spark innovation and race ahead together towards a brighter future in electric motorcycle racing.</h3>
            <div className="contact-container">
                <div className="contact-section">
                    <h2>General</h2>
                    <p>For partners, students, members, and the general public, including non-university individuals with financial questions.</p>
                    <button onClick={() => window.location.href = 'mailto:ghostuiuc@gmail.com'}>Contact Our Team</button>
                </div>
                <div className="contact-section">
                    <h2>Administrative</h2>
                    <p>For faculty and staff affiliated with the University of Illinois who have questions concerning internal operations.</p>
                    <button onClick={() => window.location.href = 'mailto:paulek2@illinois.edu'}>Contact Paul (President)</button>
                </div>
                <div className="contact-section">
                    <h2>Financial</h2>
                    <p>For financial and accounting related questions from University of Illinois staff and affiliates.</p>
                    <button onClick={() => window.location.href = 'mailto:sblaker2@illinois.edu'}>Contact Sam (Treasurer)</button>
                </div>
            </div>
        </div>
  );
}

export default Contact;