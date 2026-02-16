import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, UserPlus } from 'lucide-react';
import './Login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    // Registration States
    const [regStep, setRegStep] = useState(1); // 1: Mobile, 2: OTP, 3: Details
    const [mobile, setMobile] = useState('');
    const [otp, setOtp] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.elements[0].value;
        const pass = e.target.elements[1].value;

        // PRESET ADMIN CREDENTIALS
        const ADMIN_EMAIL = 'admin@gov.in';
        const ADMIN_PASS = 'admin123';

        if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
            localStorage.setItem('userRole', 'admin');
            alert('Admin access granted.');
            navigate('/admin');
        } else {
            localStorage.setItem('userRole', 'citizen');
            localStorage.setItem('userName', 'Citizen User'); // Default for login
            navigate('/dashboard');
        }
    };

    const handleSendOtp = (e) => {
        e.preventDefault();
        if (!fullName || !email || !mobile) {
            alert("Please fill in all details.");
            return;
        }
        if (mobile.length < 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
        const mockOtp = Math.floor(1000 + Math.random() * 9000);
        setGeneratedOtp(mockOtp);
        alert(`OTP Sent to ${mobile}: ${mockOtp}`);
        setRegStep(2);
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        if (parseInt(otp) === generatedOtp) {
            setRegStep(3);
        } else {
            alert("Incorrect OTP. Please try again.");
        }
    };

    const handleFinalRegister = (e) => {
        e.preventDefault();
        // Save to local storage for demo purposes
        localStorage.setItem('userRole', 'citizen');
        localStorage.setItem('userName', fullName);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userMobile', mobile);

        alert("Registration Successful!");
        navigate('/dashboard');
    };

    return (
        <div className="login-page">
            <div className="login-container glass">
                <div className="login-header">
                    <div className="icon-circle">
                        {isLogin ? <Lock size={24} /> : <UserPlus size={24} />}
                    </div>
                    <h1>{isLogin ? 'Welcome Back' : 'Citizen Registration'}</h1>
                    <p>{isLogin ? 'Secure Access for Citizens & Admins' : 'Create account using Mobile OTP'}</p>
                </div>

                {isLogin ? (
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <div className="input-wrapper">
                                <Mail className="input-icon" size={18} />
                                <input type="email" placeholder="example@gov.in" required />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="label-row">
                                <label>Password</label>
                                <a href="#" className="forgot-link">Forgot?</a>
                            </div>
                            <div className="input-wrapper">
                                <Lock className="input-icon" size={18} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="btn-primary btn-full auth-btn">Sign In</button>
                    </form>
                ) : (
                    <div className="register-flow">
                        {regStep === 1 && (
                            <form onSubmit={handleSendOtp} className="login-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <div className="input-wrapper">
                                        <Mail className="input-icon" size={18} />
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number</label>
                                    <div className="input-wrapper">
                                        <div className="prefix">+91</div>
                                        <input
                                            type="tel"
                                            placeholder="98765 43210"
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                            required
                                            pattern="[0-9]{10}"
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary btn-full auth-btn">Send OTP</button>
                            </form>
                        )}

                        {regStep === 2 && (
                            <form onSubmit={handleVerifyOtp} className="login-form">
                                <div className="form-group">
                                    <label>Enter OTP</label>
                                    <div className="input-wrapper">
                                        <input
                                            type="number"
                                            placeholder="XXXX"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <span className="otp-hint">OTP sent to +91 {mobile}</span>
                                </div>
                                <button type="submit" className="btn-primary btn-full auth-btn">Verify & Proceed</button>
                                <button type="button" className="btn-link" onClick={() => setRegStep(1)}>Edit Details</button>
                            </form>
                        )}

                        {regStep === 3 && (
                            <form onSubmit={handleFinalRegister} className="login-form">
                                <div className="form-group">
                                    <label>Set Password</label>
                                    <div className="input-wrapper">
                                        <Lock className="input-icon" size={18} />
                                        <input
                                            type="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary btn-full auth-btn">Complete Registration</button>
                            </form>
                        )}
                    </div>
                )}

                <div className="login-footer">
                    <p>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                        <button className="toggle-auth" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Register with Mobile' : 'Login here'}
                        </button>
                    </p>
                </div>

                {isLogin && (
                    <div className="admin-hint">
                        <p>Admin Access → ID: <strong>admin@gov.in</strong> | Pass: <strong>admin123</strong></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
