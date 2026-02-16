import React from 'react';
import { Megaphone, Calendar, ArrowRight, Tag, Clock } from 'lucide-react';
import './Announcements.css';

const Announcements = () => {
    const announcements = [
        {
            id: 1,
            title: "New Digital Literacy Drive Launched",
            category: "Education",
            date: "Feb 16, 2026",
            summary: "Government announces a nationwide initiative to train 5 million citizens in basic digital skills over the next six months.",
            isUrgent: true
        },
        {
            id: 2,
            title: "Update on Health Insurance Subsidies",
            category: "Health",
            date: "Feb 15, 2026",
            summary: "Revised eligibility criteria for the National Health Mission to include more middle-income families.",
            isUrgent: false
        },
        {
            id: 3,
            title: "Infrastructure Weekly: Zone A Bridge Completion",
            category: "Infrastructure",
            date: "Feb 14, 2026",
            summary: "The main bridge connecting Zone A and Zone B is now fully operational, reducing travel time by 40%.",
            isUrgent: false
        },
        {
            id: 4,
            title: "Public Holiday Notice: National Unity Day",
            category: "General",
            date: "Feb 12, 2026",
            summary: "All government offices will remain closed on February 20th in observance of National Unity Day.",
            isUrgent: false
        }
    ];

    return (
        <div className="page-container container">
            <div className="announcements-header">
                <div className="badge-urgent">
                    <Megaphone size={16} />
                    <span>LATEST UPDATES</span>
                </div>
                <h1>Government Announcements</h1>
                <p>Stay informed about the latest policies, notices, and developments.</p>
            </div>

            <div className="announcements-grid">
                <div className="main-announcements">
                    {announcements.map((item) => (
                        <article key={item.id} className={`announcement-card glass ${item.isUrgent ? 'urgent' : ''}`}>
                            <div className="announcement-meta">
                                <span className="category-tag"><Tag size={12} /> {item.category}</span>
                                <span className="date-tag"><Calendar size={12} /> {item.date}</span>
                            </div>
                            <h2>{item.title}</h2>
                            <p>{item.summary}</p>
                            <button className="read-more">
                                Read Full Notice <ArrowRight size={16} />
                            </button>
                        </article>
                    ))}
                </div>

                <aside className="announcements-sidebar">
                    <div className="sidebar-widget glass">
                        <h3>Quick Notices</h3>
                        <div className="quick-list">
                            <div className="quick-item">
                                <Clock size={16} />
                                <p>Tax filing deadline extended to March 31.</p>
                            </div>
                            <div className="quick-item">
                                <Clock size={16} />
                                <p>New recruitment drive for State Police starts Monday.</p>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-widget glass subscribe-widget">
                        <h3>Get Notified</h3>
                        <p>Subscribe to receive important government alerts via SMS/Email.</p>
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn-primary btn-full">Subscribe</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Announcements;
