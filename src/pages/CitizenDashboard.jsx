import React from 'react';
import {
    User, Bell, Clock, CheckCircle,
    PlusCircle, FileText, Settings, LogOut
} from 'lucide-react';
import './CitizenDashboard.css';

const CitizenDashboard = () => {
    console.log("CitizenDashboard component rendering...");
    const [activeSection, setActiveSection] = React.useState('overview');

    const [userProfile, setUserProfile] = React.useState({
        name: "John Doe",
        email: "john.citizen@gov.in",
        phone: "+91 98765 43210",
        aadhaar: "XXXX-XXXX-8842",
        address: "123, Green Valley, Central City, Delhi",
        joinedDate: "Jan 12, 2025"
    });

    React.useEffect(() => {
        const storedName = localStorage.getItem('userName');
        const storedMobile = localStorage.getItem('userMobile');
        const storedEmail = localStorage.getItem('userEmail');

        if (storedName) {
            setUserProfile(prev => ({
                ...prev,
                name: storedName,
                phone: storedMobile ? `+91 ${storedMobile}` : prev.phone,
                email: storedEmail || (storedName.toLowerCase().replace(/\s+/g, '.') + '@citizen.gov.in')
            }));
        }
    }, []);

    const myComplaints = [
        { id: "COMP-2026-8842", subject: "Street Light Repair", status: "In Progress", date: "Feb 14, 2026" },
        { id: "COMP-2026-7210", subject: "Garbage Collection", status: "Resolved", date: "Jan 28, 2026" }
    ];

    const notifications = [
        { title: "Complaint Update", text: "Your complaint COMP-2026-8842 has been assigned to an officer.", time: "2 hours ago" },
        { title: "Scheme Alert", text: "New education scholarship scheme launched for higher secondary students.", time: "1 day ago" }
    ];

    return (
        <div className="page-container container">
            <div className="dashboard-layout">
                <aside className="dashboard-sidebar glass">
                    <div className="sidebar-profile">
                        <div className="profile-img">JD</div>
                        <h3>John Doe</h3>
                        <p>Citizen ID: CIT-1992-0482</p>
                    </div>

                    <nav className="sidebar-nav">
                        <button
                            className={activeSection === 'overview' ? 'active' : ''}
                            onClick={() => setActiveSection('overview')}
                        >
                            <User size={20} /> Overview
                        </button>
                        <button
                            className={activeSection === 'profile' ? 'active' : ''}
                            onClick={() => setActiveSection('profile')}
                        >
                            <Settings size={20} /> My Profile
                        </button>
                        <button
                            className={activeSection === 'complaints' ? 'active' : ''}
                            onClick={() => setActiveSection('overview')}
                        >
                            <FileText size={20} /> My Complaints
                        </button>
                        <button
                            className={activeSection === 'notifications' ? 'active' : ''}
                            onClick={() => setActiveSection('overview')}
                        >
                            <Bell size={20} /> Notifications
                        </button>
                        <button className="logout-btn"><LogOut size={20} /> Sign Out</button>
                    </nav>
                </aside>

                <main className="dashboard-main">
                    {activeSection === 'overview' ? (
                        <>
                            <div className="welcome-banner glass">
                                <h1>Good Morning, {userProfile.name.split(' ')[0]}</h1>
                                <p>You have 1 active complaint and 2 new notifications.</p>
                            </div>

                            <div className="dash-stats">
                                <div className="dash-stat-card glass">
                                    <Clock className="icon orange" />
                                    <div>
                                        <span className="val">1</span>
                                        <span className="lab">Active Support</span>
                                    </div>
                                </div>
                                <div className="dash-stat-card glass">
                                    <CheckCircle className="icon green" />
                                    <div>
                                        <span className="val">12</span>
                                        <span className="lab">Queries Resolved</span>
                                    </div>
                                </div>
                            </div>

                            <div className="dash-content-grid">
                                <div className="dash-section glass">
                                    <h3>Recent Complaints</h3>
                                    <div className="dash-list">
                                        {myComplaints.map((c, i) => (
                                            <div key={i} className="dash-item">
                                                <div className="item-info">
                                                    <span className="item-id">{c.id}</span>
                                                    <span className="item-title">{c.subject}</span>
                                                </div>
                                                <div className="item-meta">
                                                    <span className="item-date">{c.date}</span>
                                                    <span className={`status-tag ${c.status.replace(' ', '-').toLowerCase()}`}>
                                                        {c.status}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="view-more">View All Complaints</button>
                                </div>

                                <div className="dash-section glass">
                                    <h3>Notifications</h3>
                                    <div className="notif-list">
                                        {notifications.map((n, i) => (
                                            <div key={i} className="notif-item">
                                                <div className="notif-dot"></div>
                                                <div className="notif-content">
                                                    <h4>{n.title}</h4>
                                                    <p>{n.text}</p>
                                                    <span className="notif-time">{n.time}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="profile-section glass">
                            <h2>Citizen Profile Information</h2>
                            <div className="profile-details-grid">
                                <div className="profile-info-item">
                                    <label>Full Name</label>
                                    <p>{userProfile.name}</p>
                                </div>
                                <div className="profile-info-item">
                                    <label>Email Address</label>
                                    <p>{userProfile.email}</p>
                                </div>
                                <div className="profile-info-item">
                                    <label>Phone Number</label>
                                    <p>{userProfile.phone}</p>
                                </div>
                                <div className="profile-info-item">
                                    <label>Aadhaar Number</label>
                                    <p>{userProfile.aadhaar}</p>
                                </div>
                                <div className="profile-info-item full">
                                    <label>Permanent Address</label>
                                    <p>{userProfile.address}</p>
                                </div>
                            </div>
                            <div className="profile-actions">
                                <button className="btn-primary">Edit Profile</button>
                                <button className="btn-secondary">Download Digital ID</button>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default CitizenDashboard;
