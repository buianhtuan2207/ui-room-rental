import React from 'react';
import './Profile.css';
import {
    IconChevronRight
} from '../../assets/Icons';
import PropertyCard from "../../components/PropertyCard";

function Profile() {
    return (
        <main className="account-container">
            {/* Sidebar điều hướng */}
            <aside className="account-sidebar">
                <div className="sidebar-header">
                    <span className="account-type">Tài khoản sinh viên</span>
                    <p className="account-desc">Quản lý không gian của bạn</p>
                </div>

                <nav className="sidebar-nav">
                    <a href="#personal" className="nav-item active">
                        <span className="material-symbols-outlined">person</span>
                        Thông tin cá nhân
                    </a>
                    <a href="#password" className="nav-item">
                        <span className="material-symbols-outlined">lock_reset</span>
                        Đổi mật khẩu
                    </a>
                    <a href="#security" className="nav-item">
                        <span className="material-symbols-outlined">shield</span>
                        Bảo mật
                    </a>
                    <a href="#history" className="nav-item">
                        <span className="material-symbols-outlined">history</span>
                        Lịch sử hoạt động
                    </a>
                </nav>

                <div className="sidebar-footer">
                    <button className="btn-secondary-full">Xem hồ sơ công khai</button>
                </div>
            </aside>

            {/* Nội dung chính */}
            <section className="account-content">
                <header className="content-header">
                    <h1>Thông tin tài khoản</h1>
                    <p>Cập nhật thông tin cá nhân và quản lý tài khoản của bạn.</p>
                </header>

                <div className="account-card main-form">
                    <div className="avatar-section">
                        <div className="avatar-wrapper">
                            <img src="https://i.pravatar.cc/150?u=an" alt="Avatar" />
                            <button className="btn-edit-avatar">
                                <span className="material-symbols-outlined">edit</span>
                            </button>
                        </div>
                        <div className="avatar-text">
                            <h3>Ảnh đại diện</h3>
                            <p>PNG, JPG tối đa 5MB. Khuyên dùng ảnh vuông.</p>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="input-group">
                            <label>Họ và tên</label>
                            <input type="text" defaultValue="Nguyễn Văn An"/>
                        </div>
                        <div className="input-group">
                            <label>Email liên hệ</label>
                            <input type="email" defaultValue="an.nguyen@student.edu.vn"/>
                        </div>
                        <div className="input-group">
                            <label>Số điện thoại</label>
                            <input type="tel" defaultValue="090 1234 567"/>
                        </div>
                        <div className="input-group">
                            <label>Địa chỉ</label>
                            <input type="tel" defaultValue="Đường số 6,linh trung, thủ đức, tp.HCM"/>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button className="btn-ghost">Hủy bỏ</button>
                        <button className="btn-primary-lg">Lưu thay đổi</button>
                    </div>
                </div>

                {/* Section phòng đã lưu */}
                <div className="saved-section">
                    <div className="section-flex-header">
                        <h2>Phòng đã lưu gần đây</h2>
                        <button className="btn-text">
                            Xem tất cả <IconChevronRight width="16" />
                        </button>
                    </div>

                    <div className="saved-grid">
                       <PropertyCard/>
                        <PropertyCard/>
                        <PropertyCard/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Profile;