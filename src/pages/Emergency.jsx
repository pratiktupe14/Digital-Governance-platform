import React from 'react';
import { Phone, AlertCircle, MapPin, Radio, Shield, HeartPulse, Flame } from 'lucide-react';
import './Emergency.css';

const Emergency = () => {
    const contacts = [
        { title: "National Emergency", number: "112", icon: <Phone />, color: "var(--danger)" },
        { title: "Police", number: "100", icon: <Shield />, color: "var(--primary)" },
        { title: "Fire Station", number: "101", icon: <Flame />, color: "var(--warning)" },
        { title: "Ambulance", number: "102", icon: <HeartPulse />, color: "#e11d48" }
    ];

    const alerts = [
        {
            type: "Weather",
            title: "Heavy Rainfall Alert",
            desc: "Coastal areas expected to receive heavy rainfall in the next 24 hours. Stay indoors.",
            time: "2 mins ago",
            level: "High"
        },
        {
            type: "Public Safety",
            title: "Routine Maintenance",
            desc: "Power cut scheduled in Zone B from 10:00 AM to 02:00 PM today.",
            time: "1 hour ago",
            level: "Info"
        }
    ];

    return (
        <div className="page-container container">
            <div className="emergency-header">
                <h1>Emergency Response Dashboard</h1>
                <p>Immediate assistance and real-time safety alerts for citizens.</p>
            </div>

            <div className="emergency-grid">
                <div className="contact-section">
                    <h2>Emergency Helplines</h2>
                    <div className="contact-cards">
                        {contacts.map((c, i) => (
                            <div key={i} className="contact-card glass" style={{ borderColor: c.color }}>
                                <div className="contact-icon" style={{ background: c.color }}>{c.icon}</div>
                                <div className="contact-info">
                                    <span className="contact-title">{c.title}</span>
                                    <span className="contact-number">{c.number}</span>
                                </div>
                                <button className="call-btn">Call</button>
                            </div>
                        ))}
                    </div>

                    <div className="hospital-card glass">
                        <h3>Nearby Facilities</h3>
                        <div className="facility-item">
                            <MapPin size={18} />
                            <div>
                                <p className="facility-name">City General Hospital</p>
                                <p className="facility-dist">1.2 km away • Emergency Wing Open</p>
                            </div>
                        </div>
                        <div className="facility-item">
                            <MapPin size={18} />
                            <div>
                                <p className="facility-name">Central Police Station</p>
                                <p className="facility-dist">0.8 km away • 24/7 Helpline</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="alerts-section">
                    <div className="alerts-card glass">
                        <div className="alerts-header">
                            <div className="live-badge">
                                <Radio size={16} />
                                <span>LIVE ALERTS</span>
                            </div>
                            <button className="refresh-btn">Refresh</button>
                        </div>

                        <div className="alerts-list">
                            {alerts.map((alert, i) => (
                                <div key={i} className={`alert-item ${alert.level.toLowerCase()}`}>
                                    <div className="alert-meta">
                                        <span className="alert-type">{alert.type}</span>
                                        <span className="alert-time">{alert.time}</span>
                                    </div>
                                    <h3>{alert.title}</h3>
                                    <p>{alert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="disaster-safety glass">
                        <h3>Disaster Preparedness</h3>
                        <p>Guidelines for common emergencies.</p>
                        <div className="guide-links">
                            <a href="#">Earthquake Protocol</a>
                            <a href="#">Flood Safety Tips</a>
                            <a href="#">Fire Evacuation Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emergency;
