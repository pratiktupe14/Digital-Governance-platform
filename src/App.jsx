import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Complaints from './pages/Complaints';
import Emergency from './pages/Emergency';
import AdminDashboard from './pages/AdminDashboard';
import Schemes from './pages/Schemes';
import Login from './pages/Login';
import Services from './pages/Services';
import CitizenDashboard from './pages/CitizenDashboard';
import Announcements from './pages/Announcements';
import AboutContact from './pages/AboutContact';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/services" element={<Services />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/dashboard" element={<CitizenDashboard />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/about" element={<AboutContact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-info">
            <h3>DigiGov</h3>
            <p>Empowering citizens through digital transparency and efficiency.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link to="/about">About Us</Link>
              <Link to="/about">Contact</Link>
              <Link to="/announcements">Announcements</Link>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Disclaimer</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom container">
          <p>&copy; 2026 Digital Governance Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
