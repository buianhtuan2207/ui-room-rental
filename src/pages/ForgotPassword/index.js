
import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

export default function ForgotPassword() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý logic gọi API quên mật khẩu ở đây
        console.log("Đã gửi yêu cầu đặt lại mật khẩu!");
    };

    return (
        <div className="forgot-page">
            <main className="forgot-main">
                <div className="forgot-card">
                    {/* Left Side: Image */}
                    <div className="forgot-sidebar">
                        <img 
                            className="forgot-image" 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                            alt="Sanctuary Study Space"
                        />
                        <div className="sidebar-overlay"></div>
                        <div className="sidebar-text-container">
                            <h1 className="sidebar-title">Tìm lại không gian của bạn.</h1>
                            <p className="sidebar-desc">Đừng lo lắng nếu bạn lỡ quên mật khẩu. Chúng tôi sẽ giúp bạn khôi phục quyền truy cập vào The Curated Sanctuary nhanh chóng.</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="forgot-form-container">
                        <div className="brand-header">
                            <div className="brand-title">The Curated Sanctuary</div>
                            <div className="brand-divider"></div>
                        </div>

                        <div className="instructions">
                            <h2 className="instructions-title">Quên mật khẩu?</h2>
                            <p className="instructions-text">
                                Vui lòng nhập địa chỉ email bạn đã sử dụng để đăng ký. Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu.
                            </p>
                        </div>

                        <form className="forgot-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label className="input-label" htmlFor="email">Địa chỉ Email</label>
                                <input 
                                    id="email"
                                    className="text-input" 
                                    type="email" 
                                    placeholder="j.doe@university.edu"
                                    required 
                                />
                            </div>

                            <div className="actions-container">
                                <button className="btn-submit" type="submit">
                                    Gửi liên kết đặt lại
                                </button>
                                <Link to="/login" className="back-to-login">
                                    <span className="material-symbols-outlined icon-small">arrow_back</span>
                                    Quay lại Đăng nhập
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-title">The Curated Sanctuary</span>
                        <p className="footer-copyright">© 2024 The Curated Sanctuary. Editorial Student Living.</p>
                    </div>
                    <div className="footer-links">
                        <a className="footer-link" href="#!">Privacy Policy</a>
                        <a className="footer-link" href="#!">Terms of Service</a>
                        <a className="footer-link" href="#!">Help Center</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
