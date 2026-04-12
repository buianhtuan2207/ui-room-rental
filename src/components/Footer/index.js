import React from 'react';
import './Footer.css';
import { IconPublic, IconShare, IconChat } from '../../assets/Icons';

function Footer() {
    return (
        <footer className="footer-main">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">TroSinhVien</h2>
                        <p className="footer-slogan">
                            Nền tảng biên tập các căn hộ, phòng trọ sinh viên được tuyển chọn kỹ lưỡng,
                            mang lại sự an tâm tuyệt đối cho hành trình học tập của bạn.
                        </p>
                        <div className="footer-socials">
                            <div className="social-circle">
                                <IconPublic className="footer-svg"/>
                            </div>
                            <div className="social-circle">
                                <IconShare className="footer-svg"/>
                            </div>
                            <div className="social-circle">
                                <IconChat className="footer-svg"/>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links-wrapper">
                        <div className="link-group">
                            <h4>Khám phá</h4>
                            <ul>
                                <li><a href="#phong">Phòng trọ</a></li>
                                <li><a href="#phong-ghep">Phòng ghép</a></li>
                                <li><a href="#uu-dai">Ưu đãi tân sinh viên</a></li>
                                <li><a href="#blog">Blog chia sẻ</a></li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h4>Hỗ trợ</h4>
                            <ul>
                                <li><a href="#help">Trung tâm trợ giúp</a></li>
                                <li><a href="#contact">Liên hệ hỗ trợ</a></li>
                                <li><a href="#feedback">Phản hồi dịch vụ</a></li>
                                <li><a href="#verify">Xác minh chủ nhà</a></li>
                            </ul>
                        </div>
                        <div className="link-group">
                            <h4>Pháp lý</h4>
                            <ul>
                                <li><a href="#privacy">Chính sách bảo mật</a></li>
                                <li><a href="#terms">Điều khoản sử dụng</a></li>
                                <li><a href="#rules">Quy chế hoạt động</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Phần dưới: Copyright */}
                <div className="footer-bottom">
                    <div className="footer-info">
                        <span className="brand-text">The Editorial Marketplace</span>
                        <span className="copyright">© 2026 TroSinhVien. Bản quyền thuộc về đội ngũ phát triển.</span>
                    </div>
                    <div className="footer-legal-links">
                        <a href="#about">Về chúng tôi</a>
                        <a href="#privacy">Quyền riêng tư</a>
                        <a href="#terms">Điều khoản</a>
                        <a href="#contact">Liên hệ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;