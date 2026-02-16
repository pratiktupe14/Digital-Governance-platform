import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, LineChart, Line, Legend
} from 'recharts';
import {
    FileText, CheckCircle, Clock, AlertTriangle,
    Search, Filter, Download, MoreVertical, LayoutDashboard, User
} from 'lucide-react';
import { adminStats, departmentData, monthlyTrend, recentComplaints } from '../utils/mockData';
import './AdminDashboard.css';

const AdminDashboard = () => {
    console.log("AdminDashboard component rendering...");
    const COLORS = ['#1e40af', '#3b82f6', '#10b981', '#f59e0b', '#64748b'];
    const [activeSection, setActiveSection] = React.useState('dashboard');

    const adminProfile = {
        name: "Admin Officer",
        role: "Senior Administrator",
        department: "Central Governance",
        badgeID: "GOV-ADM-9920",
        lastLogin: "Feb 16, 2026, 09:15 AM"
    };

    return (
        <div className="page-container container admin-dashboard-layout">
            <aside className="admin-sidebar glass">
                <div className="admin-profile-mini">
                    <div className="admin-avatar">A</div>
                    <h3>{adminProfile.name}</h3>
                    <p>{adminProfile.role}</p>
                </div>
                <nav className="admin-nav">
                    <button className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>
                        <LayoutDashboard size={20} /> Dashboard
                    </button>
                    <button className={activeSection === 'complaints' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>
                        <FileText size={20} /> All Complaints
                    </button>
                    <button className={activeSection === 'profile' ? 'active' : ''} onClick={() => setActiveSection('profile')}>
                        <User size={20} /> Admin Profile
                    </button>
                    <button className="logout-btn-admin">Log Out</button>
                </nav>
            </aside>

            <main className="admin-main-content">
                <div className="admin-header">
                    <div className="header-info">
                        <h1>Admin Command Centre</h1>
                        <p>Real-time governance oversight and complaint management.</p>
                    </div>
                    <div className="header-actions">
                        <button className="btn-secondary"><Download size={18} /> Export Report</button>
                        <button className="btn-primary">Generate Alert</button>
                    </div>
                </div>

                {activeSection === 'dashboard' ? (
                    <>
                        <div className="stats-grid-admin">
                            {adminStats.map((stat, i) => (
                                <div key={i} className="admin-stat-card glass">
                                    <div className="stat-card-header">
                                        <span className="stat-label">{stat.label}</span>
                                        <div className={`trend-badge ${stat.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                                            {stat.trend}
                                        </div>
                                    </div>
                                    <div className="stat-card-body">
                                        <span className="stat-value">{stat.value}</span>
                                        {/* Needs actual icon component mapping if real, but for now just placeholder */}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="charts-grid">
                            <div className="chart-card glass">
                                <h3>Monthly Complaint Trends</h3>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <LineChart data={monthlyTrend}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="complaints" stroke="#1e40af" strokeWidth={2} />
                                            <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="chart-card glass">
                                <h3>Department Wise Breakdown</h3>
                                <div className="chart-container">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <PieChart>
                                            <Pie
                                                data={departmentData}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                outerRadius={80}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {departmentData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Tooltip />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        <div className="complaints-table-section glass">
                            <div className="table-header">
                                <h3>Recent Complaints</h3>
                                <div className="table-actions">
                                    <div className="search-box">
                                        <Search size={16} />
                                        <input type="text" placeholder="Search complaints..." />
                                    </div>
                                    <button className="icon-btn"><Filter size={18} /></button>
                                </div>
                            </div>

                            <div className="table-wrapper">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>Complaint ID</th>
                                            <th>Citizen</th>
                                            <th>Category</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentComplaints.map((c, i) => (
                                            <tr key={i}>
                                                <td className="id-cell">{c.id}</td>
                                                <td>{c.citizen}</td>
                                                <td>{c.category}</td>
                                                <td>{c.date}</td>
                                                <td>
                                                    <span className={`status-pill ${c.status.replace(' ', '-').toLowerCase()}`}>
                                                        {c.status}
                                                    </span>
                                                </td>
                                                <td><button className="icon-btn"><MoreVertical size={16} /></button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="admin-profile-section glass">
                        <h2>Administrator Credentials</h2>
                        <div className="profile-details-grid">
                            <div className="profile-info-item">
                                <label>Official Name</label>
                                <p>{adminProfile.name}</p>
                            </div>
                            <div className="profile-info-item">
                                <label>Designation</label>
                                <p>{adminProfile.role}</p>
                            </div>
                            <div className="profile-info-item">
                                <label>Government Department</label>
                                <p>{adminProfile.department}</p>
                            </div>
                            <div className="profile-info-item">
                                <label>Security Badge ID</label>
                                <p>{adminProfile.badgeID}</p>
                            </div>
                            <div className="profile-info-item full">
                                <label>System Security Acknowledgement</label>
                                <p>This administrator account has high-level access to citizen data and internal government records. All actions are logged for audit purposes. Last login trace: {adminProfile.lastLogin}</p>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
