import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Shield, Bell, User, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onMenuClick }) => {
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    return (
        <nav className="navbar glass">
            <div className="navbar-container container">
                <div className="navbar-left">
                    <button className="menu-toggle" onClick={onMenuClick}>
                        <Menu size={24} />
                    </button>
                    <Link to="/" className="logo">
                        <Shield className="logo-icon" size={32} />
                        <div className="logo-text">
                            <span className="logo-title">DigiGov</span>
                            <span className="logo-subtitle">National Portal</span>
                        </div>
                    </Link>
                </div>

                <div className="navbar-links">
                    <Link to="/schemes">Schemes</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/complaints">Complaints</Link>
                    <Link to="/announcements">Announcements</Link>
                    <Link to="/emergency" className="link-emergency">Emergency</Link>
                </div>

                <div className="navbar-actions">
                    <button className="icon-btn" aria-label="Notifications">
                        <Bell size={20} />
                        <span className="badge-dot"></span>
                    </button>
                    <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <div className="user-profile" onClick={() => navigate('/login')}>
                        <User size={20} />
                        <span className="user-name">Login / Register</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
