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
                {/* Cột trái: Giá trị cốt lõi & Thương hiệu */}
                <section className="register-sidebar">
                    <div className="sidebar-bg-wrapper">
                        <img 
                            className="sidebar-bg-image" 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                            alt="Phòng sinh viên hiện đại"
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
                            <h1 className="hero-title">Nâng tầm không gian sống của bạn.</h1>
                            <p className="hero-desc">Tham gia cộng đồng độc quyền dành cho sinh viên và các chủ nhà cao cấp, hướng tới một không gian sống tinh tế và thành công trong học tập.</p>
                            
                            <div className="feature-cards">
                                <div className="glass-card">
                                    <span className="material-symbols-outlined card-icon">verified_user</span>
                                    <h3 className="card-title">Phòng đã xác thực</h3>
                                    <p className="card-desc">Mọi bất động sản đều được kiểm định chất lượng thủ công.</p>
                                </div>
                                <div className="glass-card">
                                    <span className="material-symbols-outlined card-icon">electric_bolt</span>
                                    <h3 className="card-title">Kết nối thông minh</h3>
                                    <p className="card-desc">Tìm kiếm phong cách sống phù hợp với mục tiêu của bạn.</p>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-social-proof">
                            <div className="avatar-group">
                                <div className="avatar dummy-avatar-1"></div>
                                <div className="avatar dummy-avatar-2"></div>
                            </div>
                            <span>Hơn 5,000+ sinh viên đã tham gia trong học kỳ này</span>
                        </div>
                    </div>
                </section>

                {/* Cột phải: Form đăng ký */}
                <section className="register-form-section">
                    <div className="form-wrapper">
                        <div className="form-header">
                            <h2 className="form-title">Tạo tài khoản mới</h2>
                            <p className="form-subtitle">Bắt đầu hành trình tìm kiếm không gian sống mơ ước ngay hôm nay.</p>
                        </div>

                        <form className="register-form" onSubmit={handleSubmit}>
                            {/* Lựa chọn vai trò người dùng */}
                            <div className="role-toggle">
                                <button 
                                    type="button" 
                                    className={`toggle-btn ${role === 'student' ? 'active' : ''}`}
                                    onClick={() => setRole('student')}
                                >
                                    Sinh viên
                                </button>
                                <button 
                                    type="button" 
                                    className={`toggle-btn ${role === 'landlord' ? 'active' : ''}`}
                                    onClick={() => setRole('landlord')}
                                >
                                    Chủ nhà
                                </button>
                            </div>

                            <div className="form-grid">
                                {/* Họ và Tên */}
                                <div className="input-group">
                                    <label className="input-label">Họ và Tên</label>
                                    <input className="text-input" type="text" placeholder="Nguyễn Văn An" required />
                                </div>

                                {/* Email */}
                                <div className="input-group">
                                    <label className="input-label">Địa chỉ Email</label>
                                    <input className="text-input" type="email" placeholder="an.nguyen@daihoc.edu.vn" required />
                                </div>

                                <div className="input-row">
                                    {/* Số điện thoại */}
                                    <div className="input-group">
                                        <label className="input-label">Số điện thoại</label>
                                        <input className="text-input" type="tel" placeholder="0901 234 567" />
                                    </div>
                                    
                                    {/* Trường học */}
                                    <div className="input-group">
                                        <label className="input-label">Trường đại học</label>
                                        <div className="select-wrapper">
                                            <select className="text-input select-input" required defaultValue="">
                                                <option value="" disabled>Chọn trường đại học</option>
                                                <option value="hust">ĐH Bách Khoa</option>
                                                <option value="neu">ĐH Kinh tế Quốc dân</option>
                                                <option value="ftu">ĐH Ngoại thương</option>
                                                <option value="vnu">ĐH Quốc gia</option>
                                            </select>
                                            <span className="material-symbols-outlined select-icon">expand_more</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mật khẩu */}
                                <div className="input-group">
                                    <label className="input-label">Mật khẩu</label>
                                    <input className="text-input" type="password" placeholder="••••••••" required />
                                </div>

                                {/* Xác nhận mật khẩu */}
                                <div className="input-group">
                                    <label className="input-label">Xác nhận mật khẩu</label>
                                    <input className="text-input" type="password" placeholder="••••••••" required />
                                </div>
                            </div>

                            {/* Điều khoản */}
                            <div className="checkbox-group">
                                <input type="checkbox" id="terms" className="checkbox-input" required />
                                <label htmlFor="terms" className="checkbox-label">
                                    Tôi đồng ý với các <a href="#!" className="link">Điều khoản dịch vụ</a> và <a href="#!" className="link">Chính sách bảo mật</a>.
                                </label>
                            </div>

                            {/* Nút đăng ký */}
                            <button type="submit" className="btn-submit">
                                Tạo tài khoản ngay
                            </button>

                            <p className="login-prompt">
                                Bạn đã có tài khoản? <Link to="/login" className="link font-bold">Đăng nhập ngay</Link>
                            </p>
                        </form>
                    </div>
                </section>
            </main>

            {/* Chân trang */}
            <footer className="footer-container">
                <div className="footer-brand-info">
                    <span className="footer-title">The Curated Sanctuary</span>
                    <p className="footer-copyright">© 2024 The Curated Sanctuary. Không gian sống sinh viên tiêu chuẩn.</p>
                </div>
                <div className="footer-links">
                    <a href="#!">Chính sách bảo mật</a>
                    <a href="#!">Điều khoản dịch vụ</a>
                    <a href="#!">Trung tâm hỗ trợ</a>
                    <a href="#!">Liên hệ</a>
                </div>
            </footer>
        </div>
    );
}