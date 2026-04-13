import React from 'react';
import './Verify.css'; // Import file CSS cùng thư mục

export default function Verify() {
    const handleVerify = (e) => {
        e.preventDefault();
        // Xử lý logic xác thực OTP ở đây
        console.log("Đang xác minh...");
    };

    return (
        <div className="verify-page">
            {/* Main Content Canvas */}
            <main className="verify-main">
                <div className="verify-card">
                    {/* Left Side: Editorial Image/Brand Moment */}
                    <div className="verify-sidebar">
                        <img 
                            className="verify-image" 
                            data-alt="Modern minimalist student apartment with a large window, warm morning sunlight, and a cozy study nook with books" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmFbvaP_0LijQ7QMkSoxWhB_v76aGKzof5BBdBSyTBb0bKVLwQ4p7yipCD4m_7zOWXOA1VvsfkgZVGhsiNR48Wml4NJaLJhHXIfsoh2Bvc1ojzmIj6D8g-FIbInZ3YYq5GQpyllvOtv2KRKFusFmTjwnWR3yfyk_OuIPxgGgaLFNHi6GK1fp0dc8kiKI14yLuTWlEJ7IqtkUhqKBZTVbVJkuOkGeRqMqs1yhkcAJf4UVTbX53likEzXlbpMZ_V8xE5mTsUsygtep01" 
                            alt="Sanctuary"
                        />
                        <div className="sidebar-overlay"></div>
                        <div className="sidebar-text-container">
                            <h1 className="sidebar-title">Securing your new lifestyle.</h1>
                            <p className="sidebar-desc">We're verifying your identity to ensure The Curated Sanctuary remains a safe space for our student community.</p>
                        </div>
                    </div>

                    {/* Right Side: OTP Verification Form */}
                    <div className="verify-form-container">
                        {/* Brand Anchor (Identity Check) */}
                        <div className="brand-header">
                            <div className="brand-title">The Curated Sanctuary</div>
                            <div className="brand-divider"></div>
                        </div>

                        {/* Instructions */}
                        <div className="instructions">
                            <h2 className="instructions-title">Check your inbox</h2>
                            <p className="instructions-text">
                                We've sent a 6-digit verification code to <span className="highlight-text">j.doe@university.edu</span>. The code will expire in 10 minutes.
                            </p>
                        </div>

                        {/* OTP Input Grid */}
                        <form className="verify-form" onSubmit={handleVerify}>
                            <div className="otp-container">
                                <input className="otp-input" maxLength="1" required type="text" />
                                <input className="otp-input" maxLength="1" required type="text" />
                                <input className="otp-input" maxLength="1" required type="text" />
                                <input className="otp-input" maxLength="1" required type="text" />
                                <input className="otp-input" maxLength="1" required type="text" />
                                <input className="otp-input" maxLength="1" required type="text" />
                            </div>

                            {/* Actions */}
                            <div className="actions-container">
                                <button className="btn-submit" type="submit">
                                    Verify Account
                                </button>
                                <div className="resend-container">
                                    <button className="btn-resend" type="button">
                                        <span className="material-symbols-outlined icon-small">refresh</span>
                                        <span>Resend code</span>
                                    </button>
                                    <div className="timer-badge">
                                        <span className="pulse-dot"></span>
                                        Request new code in <span className="timer-text">00:54</span>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Help Link */}
                        <div className="help-section">
                            <p className="help-text">
                                <span className="material-symbols-outlined icon-small">help</span>
                                Having trouble? <a className="help-link" href="#!">Contact Student Support</a>
                            </p>
                        </div>
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
                        <a className="footer-link" href="#!">Contact Support</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}