import React, { useState } from 'react';
import { FileText, Send, CheckCircle, Search, AlertTriangle, Upload } from 'lucide-react';
import './Complaints.css';

const Complaints = () => {
    const [complaintId, setComplaintId] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState(null);
    const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

    const departments = [
        "Public Works (PWD)",
        "Urban Development",
        "Police & Public Safety",
        "Health & Sanitation",
        "Education",
        "Electricity/Energy",
        "Transport"
    ];

    const handleTrack = (e) => {
        e.preventDefault();
        setIsSearching(true);
        // Mock search logic
        setTimeout(() => {
            setSearchResult({
                id: complaintId || "COMP-2026-8842",
                status: "In Progress",
                category: "Public Works",
                date: "2026-02-14",
                update: "Assigned to Junior Engineer (Maintenance)"
            });
            setIsSearching(false);
        }, 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('submitting');
        // In a real application, you would send formData to a backend here
        console.log("Submitting form data:", formData);
        setTimeout(() => {
            setFormStatus('success');
            // Optionally reset form data here
            setFormData({
                name: '',
                phone: '',
                department: '',
                priority: 'medium',
                description: '',
                captcha: ''
            });
        }, 2000);
    };

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        department: '',
        priority: 'medium',
        description: '',
        captcha: ''
    });

    const handleDescriptionChange = (e) => {
        const desc = e.target.value.toLowerCase();
        let autoDept = formData.department;

        // Simple keyword-based auto-assignment
        if (desc.includes('pothole') || desc.includes('road') || desc.includes('bridge')) autoDept = "Public Works (PWD)";
        else if (desc.includes('trash') || desc.includes('garbage') || desc.includes('drain')) autoDept = "Health & Sanitation";
        else if (desc.includes('police') || desc.includes('theft') || desc.includes('safety')) autoDept = "Police & Public Safety";
        else if (desc.includes('electricity') || desc.includes('power') || desc.includes('bill')) autoDept = "Electricity/Energy";

        setFormData({ ...formData, description: e.target.value, department: autoDept });
    };

    if (formStatus === 'success') {
        return (
            <div className="page-container container">
                <div className="success-message glass">
                    <CheckCircle size={64} color="var(--success)" />
                    <h1>Complaint Submitted Successfully</h1>
                    <p>Your Complaint ID is <strong>COMP-2026-{Math.floor(Math.random() * 9000) + 1000}</strong></p>
                    <p>Please keep this ID for future tracking. You will receive an SMS update shortly.</p>
                    <button className="btn-primary" onClick={() => setFormStatus('idle')}>Register Another</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container container">
            <div className="complaint-grid">
                <div className="complaint-form-section">
                    <div className="section-header">
                        <FileText className="header-icon" />
                        <div>
                            <h2>Register New Complaint</h2>
                            <p>Please provide accurate details for faster resolution.</p>
                        </div>
                    </div>

                    <form className="complaint-form" onSubmit={handleSubmit}>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Department</label>
                                <select
                                    required
                                    value={formData.department}
                                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                >
                                    <option value="">Select Department</option>
                                    {departments.map(d => <option key={d} value={d}>{d}</option>)}
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Priority</label>
                                <select
                                    required
                                    value={formData.priority}
                                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                                >
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High / Urgent</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Complaint Description</label>
                            <textarea
                                rows="4"
                                required
                                placeholder="Describe your issue in detail (e.g., 'pothole on main road')..."
                                value={formData.description}
                                onChange={handleDescriptionChange}
                            ></textarea>
                            <span className="form-hint">AI Tip: Typing 'pothole', 'garbage', or 'electricity' will auto-assign the department.</span>
                        </div>

                        <div className="form-group">
                            <label>Upload Evidence (Optional)</label>
                            <div className="file-upload">
                                <Upload size={24} />
                                <span>Click to upload or drag and drop</span>
                                <span className="file-limit">JPG, PNG or PDF (Max 5MB)</span>
                                <input type="file" hidden />
                            </div>
                        </div>

                        <div className="form-captcha glass">
                            <span>CAPTCHA: <strong>R 8 X 4 Q</strong></span>
                            <input type="text" placeholder="Enter characters" required />
                        </div>

                        <button type="submit" className="btn-primary btn-full" disabled={formStatus === 'submitting'}>
                            {formStatus === 'submitting' ? 'Submitting...' : 'Submit Complaint'} <Send size={18} />
                        </button>
                    </form>
                </div>

                <div className="complaint-track-section">
                    <div className="track-card glass">
                        <h3>Track Complaint</h3>
                        <p>Check the real-time status of your previously registered complaint.</p>
                        <form onSubmit={handleTrack} className="track-form">
                            <div className="search-input-group">
                                <Search className="search-icon" size={18} />
                                <input
                                    type="text"
                                    placeholder="Enter Complaint ID"
                                    value={complaintId}
                                    onChange={(e) => setComplaintId(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn-secondary btn-full" disabled={isSearching}>
                                {isSearching ? 'Searching...' : 'Search'}
                            </button>
                        </form>

                        {searchResult && (
                            <div className="track-result">
                                <div className="result-header">
                                    <span className="result-id">{searchResult.id}</span>
                                    <span className={`status-badge ${searchResult.status.replace(' ', '-').toLowerCase()}`}>
                                        {searchResult.status}
                                    </span>
                                </div>
                                <div className="result-body">
                                    <p><strong>Category:</strong> {searchResult.category}</p>
                                    <p><strong>Date:</strong> {searchResult.date}</p>
                                    <div className="status-update">
                                        <Clock size={14} />
                                        <span>{searchResult.update}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {!searchResult && !isSearching && (
                            <div className="track-placeholder">
                                <AlertTriangle size={32} />
                                <p>No active search. Enter an ID to track progress.</p>
                            </div>
                        )}
                    </div>

                    <div className="lifecycle-card glass">
                        <h4>Application Lifecycle</h4>
                        <div className="lifecycle-steps">
                            {['Submitted', 'Under Review', 'Assigned', 'In Progress', 'Resolved'].map((step, idx) => (
                                <div key={idx} className="step">
                                    <div className="step-dot"></div>
                                    <span>{step}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaints;
