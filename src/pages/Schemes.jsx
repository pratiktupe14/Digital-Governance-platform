import React, { useState } from 'react';
import { Search, Filter, ArrowRight, ExternalLink, BookOpen, Heart, Landmark, Briefcase } from 'lucide-react';
import './Schemes.css';

const Schemes = () => {
    const categories = [
        { name: "Health", icon: <Heart size={18} /> },
        { name: "Education", icon: <BookOpen size={18} /> },
        { name: "Agriculture", icon: <Landmark size={18} /> },
        { name: "Employment", icon: <Briefcase size={18} /> }
    ];

    const schemes = [
        {
            title: "Ayushman Bharat",
            category: "Health",
            desc: "Providing health insurance coverage of up to INR 5 Lakh per family per year for secondary and tertiary care hospitalization.",
            eligibility: "Low income families, rural households.",
            status: "Active"
        },
        {
            title: "PM-Kisan Samman Nidhi",
            category: "Agriculture",
            desc: "Income support of INR 6,000 per year in three equal installments to all land-holding farmer families.",
            eligibility: "Small and marginal farmers.",
            status: "Active"
        },
        {
            title: "Skill India Mission",
            category: "Education",
            desc: "Training over 40 crore people in India in different skills by 2022. It includes various initiatives like PMKVY.",
            eligibility: "Youth aged 15-45.",
            status: "Active"
        },
        {
            title: "Startup India",
            category: "Employment",
            desc: "Catalyzing startup culture and building a strong and inclusive ecosystem for innovation and entrepreneurship.",
            eligibility: "DPIIT recognized startups.",
            status: "Active"
        }
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSchemes = activeCategory === "All"
        ? schemes
        : schemes.filter(s => s.category === activeCategory);

    return (
        <div className="page-container container">
            <div className="schemes-header">
                <h1>Government Schemes & Benefits</h1>
                <p>Explore welfare schemes, subsidies, and financial assistance programs.</p>
            </div>

            <div className="schemes-filter-bar glass">
                <div className="search-box-large">
                    <Search size={22} />
                    <input type="text" placeholder="Search for schemes by name or keyword..." />
                </div>

                <div className="category-chips">
                    <button
                        className={`chip ${activeCategory === "All" ? "active" : ""}`}
                        onClick={() => setActiveCategory("All")}
                    >
                        All Schemes
                    </button>
                    {categories.map(c => (
                        <button
                            key={c.name}
                            className={`chip ${activeCategory === c.name ? "active" : ""}`}
                            onClick={() => setActiveCategory(c.name)}
                        >
                            {c.icon} {c.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="schemes-grid">
                {filteredSchemes.map((s, i) => (
                    <div key={i} className="scheme-card glass">
                        <div className="scheme-badge">{s.category}</div>
                        <div className="scheme-body">
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <div className="scheme-meta">
                                <strong>Eligibility:</strong> {s.eligibility}
                            </div>
                        </div>
                        <div className="scheme-footer">
                            <button className="btn-text">View Details <ArrowRight size={16} /></button>
                            <button className="btn-secondary">Apply Now <ExternalLink size={16} /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schemes;
