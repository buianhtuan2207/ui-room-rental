import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../../services/authService';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();

    // State quản lý role (Chuyển đổi: 'student' -> 'USER', 'landlord' -> 'HOST' khi gọi API)
    const [role, setRole] = useState('student');

    // State quản lý dữ liệu form
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        university: '',
        password: '',
        confirmPassword: ''
    });

    // State quản lý trạng thái xử lý
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Hàm cập nhật state khi gõ input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // 1. Validate: Kiểm tra mật khẩu xác nhận
        if (formData.password !== formData.confirmPassword) {
            return setError('Passwords do not match! (Mật khẩu không khớp)');
        }

        setIsLoading(true);

        try {
            // 2. Chuẩn bị dữ liệu gửi lên Backend (Khớp với Postman của bạn)
            const payload = {
                username: formData.fullName, // Dùng Full Name làm username (hoặc bạn có thể tạo ô nhập username riêng)
                email: formData.email,
                password: formData.password,
                role: role === 'student' ? 'USER' : 'HOST' // Chuyển đổi role cho đúng chuẩn Backend
            };

            // 3. Gọi API
            const data = await registerApi(payload);

            setSuccess('Registration successful! Redirecting to login...'); // Đăng ký thành công

            // 4. Đợi 2 giây để người dùng đọc thông báo rồi chuyển về trang Login
            setTimeout(() => {
                navigate('/verify');
            }, 2000);

        } catch (err) {
            setError(err.message || 'Registration failed. Please try again!');
        } finally {
            setIsLoading(false);
        }
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

                        {/* HIỂN THỊ THÔNG BÁO LỖI / THÀNH CÔNG */}
                        {error && (
                            <div style={{ color: '#dc3545', backgroundColor: '#f8d7da', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
                                {error}
                            </div>
                        )}
                        {success && (
                            <div style={{ color: '#198754', backgroundColor: '#d1e7dd', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
                                {success}
                            </div>
                        )}

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
                                    <input
                                        className="text-input"
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Alex Morgan"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="input-group">
                                    <label className="input-label">Email Address</label>
                                    <input
                                        className="text-input"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="alex@university.edu"
                                        required
                                    />
                                </div>

                                <div className="input-row">
                                    {/* Phone (Lưu ý: Nếu Backend chưa có trường Phone, dữ liệu này chỉ hiển thị trên UI) */}
                                    <div className="input-group">
                                        <label className="input-label">Phone</label>
                                        <input
                                            className="text-input"
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    {/* University */}
                                    <div className="input-group">
                                        <label className="input-label">University</label>
                                        <div className="select-wrapper">
                                            <select
                                                className="text-input select-input"
                                                name="university"
                                                value={formData.university}
                                                onChange={handleChange}
                                                required
                                            >
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
                                    <input
                                        className="text-input"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="input-group">
                                    <label className="input-label">Confirm Password</label>
                                    <input
                                        className="text-input"
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
                                    />
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
                            <button
                                type="submit"
                                className="btn-submit"
                                disabled={isLoading}
                                style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
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
                {/* ... (Giữ nguyên) ... */}
            </footer>
        </div>
    );
}