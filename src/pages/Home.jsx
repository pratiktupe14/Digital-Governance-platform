import React from 'react';
import Hero from '../components/Hero';
import { Shield, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
    const features = [
        {
            icon: <Shield size={32} />,
            title: "Secure Verification",
            description: "State-of-the-art encryption and Aadhaar-linked secure authentication for all services."
        },
        {
            icon: <Users size={32} />,
            title: "Citizen First",
            description: "Designed with accessibility in mind to ensure every citizen can access government services easily."
        },
        {
            icon: <Clock size={32} />,
            title: "Real-time Tracking",
            description: "Monitor the status of your applications and complaints with instant live updates."
        }
    ];

    const stats = [
        { label: "Resolved Complaints", value: "850k+", icon: <CheckCircle /> },
        { label: "Active Users", value: "2.4M", icon: <Users /> },
        { label: "Services Available", value: "120+", icon: <Shield /> }
    ];

    return (
        <div className="home-page">
            <Hero />

            <section className="features-section container">
                <h2 className="section-title">Core Platform Features</h2>
                <div className="features-grid">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{f.icon}</div>
                            <h3>{f.title}</h3>
                            <p>{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((s, i) => (
                            <div key={i} className="stat-card">
                                <div className="stat-icon">{s.icon}</div>
                                <div className="stat-info">
                                    <span className="stat-number">{s.value}</span>
                                    <span className="stat-text">{s.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>Need Quick Assistance?</h2>
                        <p>Our AI-powered chatbot and 24/7 helpdesk are here to help you navigate through government schemes and services.</p>
                        <button className="btn-primary">Get Started Now <ArrowRight size={20} /></button>
                    </div>
                    <div className="cta-image">
                        {/* I'll use a placeholder or image generation later */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
