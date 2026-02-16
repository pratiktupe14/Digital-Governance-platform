import React from 'react';
import { Mail, Phone, MapPin, Globe, ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';
import './AboutContact.css';

const AboutContact = () => {
    return (
        <div className="page-container container">
            <div className="about-section">
                <div className="about-content">
                    <h1>About the Digital Governance Platform</h1>
                    <p className="lead">
                        The Digital Governance Platform is a state-of-the-art initiative aimed at
                        revolutionizing how citizens interact with the government.
                    </p>
                    <p>
                        Our mission is to ensure transparency, efficiency, and citizen empowerment
                        through digital innovation. By bringing all major government services,
                        complaint mechanisms, and emergency alerts into a single unified dashboard,
                        we reduce bureaucracy and increase accountability.
                    </p>

                    <div className="mission-grid">
                        <div className="mission-item glass">
                            <ShieldCheck className="icon" size={32} />
                            <h3>Transparency</h3>
                            <p>Real-time tracking of every complaint and service request ensures nothing is lost in the system.</p>
                        </div>
                        <div className="mission-item glass">
                            <Globe className="icon" size={32} />
                            <h3>Inclusivity</h3>
                            <p>Designed for every citizen, with multilingual support and high-accessibility standards.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-grid-wrapper">
                <div className="contact-form-card glass">
                    <h2>Send us a Message</h2>
                    <p>Have specific queries or feedback? Write to us directly.</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="5" placeholder="Your message here..." required></textarea>
                        </div>
                        <button className="btn-primary btn-full">Send Message</button>
                    </form>
                </div>

                <div className="contact-info-grid">
                    <div className="info-card glass">
                        <h3>Headquarters</h3>
                        <div className="info-item">
                            <MapPin size={24} className="icon" />
                            <div>
                                <p>National Informatics Center</p>
                                <p>New Delhi, 110001</p>
                            </div>
                        </div>
                    </div>

                    <div className="info-card glass">
                        <h3>Support Channels</h3>
                        <div className="info-item">
                            <Phone size={24} className="icon" />
                            <div>
                                <p>Toll Free: 1800-11-2233</p>
                                <p>Mon-Sat: 9 AM - 6 PM</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={24} className="icon" />
                            <div>
                                <p>support@digigov.gov.in</p>
                                <p>feedback@digigov.gov.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links glass">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#"><Twitter /></a>
                            <a href="#"><Linkedin /></a>
                            <a href="#"><Github /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContact;
