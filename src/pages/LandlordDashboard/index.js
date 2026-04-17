import React, { useState } from 'react';
import './Landlord.css';

function LandlordDashboard() {
    const [activeTab, setActiveTab] = useState('appointments'); // Quản lý tab hiện tại

    // --- STATES ---
    const [appointments, setAppointments] = useState([
        { id: 1, student: 'Nguyễn Văn A', room: 'Soho Loft', time: '15:00', date: '17/04', status: 'Chờ xác nhận' },
        { id: 2, student: 'Trần Thị B', room: 'Studio Central', time: '09:00', date: '18/04', status: 'Đã xác nhận' }
    ]);

    const [listings, setListings] = useState([
        { id: 101, title: 'Phòng trọ cao cấp Bình Thạnh', views: 1250, status: 'Đang hiển thị' },
        { id: 102, title: 'Căn hộ Studio Quận 7', views: 840, status: 'Đã cho thuê' }
    ]);

    const [adPackage, setAdPackage] = useState({ name: 'Gói Ưu Tiên 1', daysLeft: 2, progress: 70 });

    // --- HANDLERS ---
    const handleCancel = (id) => {
        if (window.confirm("Bạn có chắc muốn hủy lịch hẹn này?")) {
            setAppointments(appointments.filter(apt => apt.id !== id));
        }
    };

    const handleRenew = () => {
        alert("Đang xử lý gia hạn...");
        setTimeout(() => setAdPackage({ ...adPackage, daysLeft: 30, progress: 100 }), 1000);
    };

    // --- RENDER COMPONENTS ---
    const renderContent = () => {
        switch (activeTab) {
            case 'appointments':
                return (
                    <section className="card full-width">
                        <h3>Lịch hẹn xem phòng sắp tới</h3>
                        <div className="appointment-list">
                            {appointments.map(apt => (
                                <div key={apt.id} className="appointment-item">
                                    <div className="date-tag">{apt.date.split('/')[0]}<br/><span>T4</span></div>
                                    <div className="apt-details">
                                        <h4>{apt.student} - {apt.room}</h4>
                                        <p>{apt.time} • <span className="status-badge">{apt.status}</span></p>
                                    </div>
                                    <div className="apt-actions">
                                        <button className="btn-text" onClick={() => alert('Đã gửi nhắc nhở!')}>Nhắc nhở</button>
                                        <button className="btn-danger" onClick={() => handleCancel(apt.id)}>Hủy</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            case 'listings':
                return (
                    <section className="card full-width">
                        <div className="section-header">
                            <h3>Danh sách tin đăng</h3>
                            <button className="btn-primary-small">+ Đăng tin mới</button>
                        </div>
                        <div className="listing-table">
                            {listings.map(item => (
                                <div key={item.id} className="listing-item">
                                    <img src={`https://picsum.photos/100/70?random=${item.id}`} alt="room" />
                                    <div className="listing-info">
                                        <h4>{item.title}</h4>
                                        <p>Lượt xem: <strong>{item.views}</strong> • {item.status}</p>
                                    </div>
                                    <button className="btn-outline-small">Chỉnh sửa</button>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            case 'payments':
                return (
                    <div className="dashboard-grid">
                        <section className="card">
                            <h3>Gói dịch vụ hiện tại</h3>
                            <div className="ad-package-box">
                                <div className="package-info">
                                    <strong>{adPackage.name}</strong>
                                    <span className={adPackage.daysLeft < 3 ? 'warning' : ''}>Còn {adPackage.daysLeft} ngày</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-fill" style={{ width: `${adPackage.progress}%` }}></div>
                                </div>
                                <button className="btn-primary-outline" onClick={handleRenew}>Gia hạn ngay</button>
                            </div>
                        </section>
                        <section className="card">
                            <h3>Lịch sử giao dịch</h3>
                            <div className="history-list">
                                <div className="history-item"><span>15/04/2024</span> <strong>- 200.000đ</strong></div>
                                <div className="history-item"><span>01/04/2024</span> <strong>- 500.000đ</strong></div>
                            </div>
                        </section>
                    </div>
                );
            case 'reports':
                return (
                    <section className="card full-width">
                        <h3>Phản hồi từ người thuê</h3>
                        <div className="report-item">
                            <div className="report-user">Lê Văn C (Phòng 302)</div>
                            <p>"Vòi hoa sen bị hỏng, nhờ chủ nhà qua kiểm tra giúp ạ."</p>
                            <button className="btn-text">Phản hồi ngay</button>
                        </div>
                    </section>
                );
            default: return null;
        }
    };

    return (
        <div className="landlord-container">
            <aside className="landlord-sidebar">
                <div className="logo">TroSinhVien</div>
                <nav className="nav-menu">
                    <div className={`nav-item ${activeTab === 'appointments' ? 'active' : ''}`} onClick={() => setActiveTab('appointments')}>Quản lý lịch hẹn</div>
                    <div className={`nav-item ${activeTab === 'listings' ? 'active' : ''}`} onClick={() => setActiveTab('listings')}>Quản lý tin đăng</div>
                    <div className={`nav-item ${activeTab === 'payments' ? 'active' : ''}`} onClick={() => setActiveTab('payments')}>Thanh toán & Gói tin</div>
                    <div className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>Báo cáo người thuê</div>
                </nav>
            </aside>

            <main className="landlord-main">
                <header className="main-header">
                    <h1>{activeTab === 'appointments' ? 'Quản lý lịch hẹn' :
                        activeTab === 'listings' ? 'Tin đăng của tôi' :
                            activeTab === 'payments' ? 'Tài chính & Gói tin' : 'Báo cáo & Khiếu nại'}</h1>
                    <div className="user-info">
                        <span className="badge-verified">Chủ trọ xác thực</span>
                        <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar" />
                    </div>
                </header>
                <div className="content-area">{renderContent()}</div>
            </main>
        </div>
    );
}

export default LandlordDashboard;