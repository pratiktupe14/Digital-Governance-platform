import React from 'react';
import {
    FileText, CreditCard, Home, GraduationCap,
    MapPin, UserCheck, Smartphone, HelpCircle, ArrowRight
} from 'lucide-react';
import './Services.css';

const Services = () => {
    const serviceCategories = [
        {
            title: "Identity & Certificates",
            icon: <UserCheck size={28} />,
            items: ["Birth Certificate", "Caste Certificate", "Income Certificate", "Domicile Certificate"]
        },
        {
            title: "Property & Land",
            icon: <Home size={28} />,
            items: ["Property Tax", "Land Records (Bhulekh)", "Building Approval", "Water Connection"]
        },
        {
            title: "Education & Skills",
            icon: <GraduationCap size={28} />,
            items: ["Scholarship Application", "School Enrollment", "Skill Training", "Degree Verification"]
        },
        {
            title: "Social Welfare",
            icon: <Heart size={28} />,
            items: ["Pension Services", "Ration Card", "Disability Support", "Women Empowerment"]
        },
        {
            title: "Business & Trade",
            icon: <CreditCard size={28} />,
            items: ["Trade License", "GST Registration", "Company Setup", "MSME Support"]
        },
        {
            title: "Utility & Others",
            icon: <Smartphone size={28} />,
            items: ["Electricity Bill", "Birth/Death Registry", "Driving License", "Vehicle Tax"]
        }
    ];

    return (
        <div className="page-container container">
            <div className="services-header">
                <h1>Digital Citizen Services Hub</h1>
                <p>Access all government services from a single window. Secure, fast, and transparent.</p>
            </div>

            <div className="services-grid">
                {serviceCategories.map((cat, i) => (
                    <div key={i} className="service-category-card glass">
                        <div className="category-header">
                            <div className="category-icon">{cat.icon}</div>
                            <h3>{cat.title}</h3>
                        </div>
                        <ul className="service-list">
                            {cat.items.map((item, idx) => (
                                <li key={idx}>
                                    <a href="#">
                                        {item}
                                        <ArrowRight size={14} className="hover-arrow" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className="view-all-btn">View All Services</button>
                    </div>
                ))}
            </div>

            <div className="faq-section glass">
                <div className="faq-header">
                    <HelpCircle size={32} />
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-grid">
                    <div className="faq-item">
                        <h4>How to track my service request?</h4>
                        <p>You can use the Track ID provided after submission in the 'Complaints' or 'Services' portal.</p>
                    </div>
                    <div className="faq-item">
                        <h4>What documents are required for a Birth Certificate?</h4>
                        <p>Hospital discharge summary, parents' ID proofs, and address proof are typically required.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Internal Heart icon for Social Welfare if not imported
const Heart = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
);

export default Services;
