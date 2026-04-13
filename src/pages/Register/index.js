
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    const [role, setRole] = useState('student'); // 'student' hoặc 'landlord'

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Đăng ký với vai trò:", role);
        // Xử lý logic gọi API đăng ký tại đây
    };

    return (
        <div className="register-page">
            <main className="register-main">
                {/* Left Side: Value Proposition & Branding */}
                <section className="register-sidebar">
                    <div className="sidebar-bg-wrapper">
                        <img 
                            className="sidebar-bg-image" 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                            alt="Luxury Student Living Room"
                        />
                        <div className="sidebar-gradient-overlay"></div>
                    </div>
                    
                    <div className="sidebar-content">
                        <div className="sidebar-brand">
                            <span className="brand-icon">
                                <span className="material-symbols-outlined">domain</span>
                            </span>
                            <span className="brand-text">The Curated Sanctuary</span>
                        </div>
                        
                        <div className="sidebar-hero">
                            <h1 className="hero-title">Elevate Your Living Experience.</h1>
                            <p className="hero-desc">Join an exclusive community of students and premium landlords dedicated to refined living and academic excellence.</p>
                            
                            <div className="feature-cards">
                                <div className="glass-card">
                                    <span className="material-symbols-outlined card-icon">verified_user</span>
                                    <h3 className="card-title">Verified Listings</h3>
                                    <p className="card-desc">Every property is hand-inspected for quality.</p>
                                </div>
                                <div className="glass-card">
                                    <span className="material-symbols-outlined card-icon">electric_bolt</span>
                                    <h3 className="card-title">Smart Matching</h3>
                                    <p className="card-desc">Find the lifestyle that fits your goals.</p>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-social-proof">
                            <div className="avatar-group">
                                <div className="avatar dummy-avatar-1"></div>
                                <div className="avatar dummy-avatar-2"></div>
                            </div>
                            <span>Joined by 5,000+ students this semester</span>
                        </div>
                    </div>
                </section>

                {/* Right Side: Registration Form */}
                <section className="register-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2 className="form-title">Create your account</h2>
                            <p className="form-subtitle">Start your journey toward a curated sanctuary today.</p>
                        </div>

                        <form className="register-form" onSubmit={handleSubmit}>
                            {/* User Role Toggle */}
                            <div className="role-toggle">
                                <button 
                                    type="button" 
                                    className={`toggle-btn ${role === 'student' ? 'active' : ''}`}
                                    onClick={() => setRole('student')}
                                >
                                    Student
                                </button>
                                <button 
                                    type="button" 
                                    className={`toggle-btn ${role === 'landlord' ? 'active' : ''}`}
                                    onClick={() => setRole('landlord')}
                                >
                                    Landlord
                                </button>
                            </div>

                            <div className="form-grid">
                                {/* Full Name */}
                                <div className="input-group">
                                    <label className="input-label">Full Name</label>
                                    <input className="text-input" type="text" placeholder="Alex Morgan" required />
                                </div>

                                {/* Email */}
                                <div className="input-group">
                                    <label className="input-label">Email Address</label>
                                    <input className="text-input" type="email" placeholder="alex@university.edu" required />
                                </div>

                                <div className="input-row">
                                    {/* Phone */}
                                    <div className="input-group">
                                        <label className="input-label">Phone</label>
                                        <input className="text-input" type="tel" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    
                                    {/* University */}
                                    <div className="input-group">
                                        <label className="input-label">University</label>
                                        <div className="select-wrapper">
                                            <select className="text-input select-input" required defaultValue="">
                                                <option value="" disabled>Select University</option>
                                                <option value="oxford">Oxford University</option>
                                                <option value="stanford">Stanford University</option>
                                                <option value="mit">MIT</option>
                                                <option value="lse">LSE</option>
                                            </select>
                                            <span className="material-symbols-outlined select-icon">expand_more</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="input-group">
                                    <label className="input-label">Password</label>
                                    <input className="text-input" type="password" placeholder="••••••••" required />
                                </div>

                                {/* Confirm Password */}
                                <div className="input-group">
                                    <label className="input-label">Confirm Password</label>
                                    <input className="text-input" type="password" placeholder="••••••••" required />
                                </div>
                            </div>

                            {/* Checkbox */}
                            <div className="checkbox-group">
                                <input type="checkbox" id="terms" className="checkbox-input" required />
                                <label htmlFor="terms" className="checkbox-label">
                                    I agree to the <a href="#!" className="link">Terms of Service</a> and <a href="#!" className="link">Privacy Policy</a>.
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn-submit">
                                Create Account
                            </button>

                            <p className="login-prompt">
                                Already have an account? <Link to="/login" className="link font-bold">Sign In</Link>
                            </p>
                        </form>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer-container">
                <div className="footer-brand-info">
                    <span className="footer-title">The Curated Sanctuary</span>
                    <p className="footer-copyright">© 2024 The Curated Sanctuary. Editorial Student Living.</p>
                </div>
                <div className="footer-links">
                    <a href="#!">Privacy Policy</a>
                    <a href="#!">Terms of Service</a>
                    <a href="#!">Help Center</a>
                    <a href="#!">Contact Support</a>
                </div>
            </footer>
        </div>
    );
}