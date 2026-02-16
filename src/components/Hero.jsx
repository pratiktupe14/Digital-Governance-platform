import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-container container">
                <div className="hero-content">
                    <span className="hero-badge">Empowering Every Citizen</span>
                    <h1 className="hero-title">
                        Your Digital Gateway to <br />
                        <span>Responsive Governance</span>
                    </h1>
                    <p className="hero-description">
                        Experience a transparent, efficient, and secure platform for all your
                        government interactions. Register complaints, track services, and stay informed.
                    </p>

                    <div className="hero-search">
                        <Search className="search-icon" size={20} />
                        <input type="text" placeholder="Search for schemes, services, or tracking ID..." />
                        <button className="search-btn">Search</button>
                    </div>

                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => navigate('/complaints')}>
                            File a Complaint <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary" onClick={() => navigate('/schemes')}>
                            View Schemes
                        </button>
                        <button className="btn-text-hero" onClick={() => navigate('/login')}>
                            Admin Login →
                        </button>
                    </div>
                </div>

                <div className="hero-image-container">
                    <div className="hero-card glass">
                        <div className="card-dot"></div>
                        <div className="card-line"></div>
                        <div className="card-line short"></div>
                        <div className="card-stats">
                            <div className="stat">
                                <span className="stat-value">98%</span>
                                <span className="stat-label">Resolution Rate</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">2M+</span>
                                <span className="stat-label">Citizens Active</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-graphic">
                        {/* Decorative circles */}
                        <div className="circle circle-1"></div>
                        <div className="circle circle-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
