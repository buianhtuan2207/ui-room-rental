import React, { useState } from 'react';
import './Detail.css';
import {
    IconWifi, IconAc, IconVerified, IconBookmark,
    IconChevronRight, IconShare, IconWashingMachine,
    IconFridge
} from '../../assets/Icons';

function Detail() {
    const images = [
        "https://picsum.photos/800/500?random=1",
        "https://picsum.photos/800/500?random=2",
        "https://picsum.photos/800/500?random=3",
        "https://picsum.photos/800/500?random=4",
        "https://picsum.photos/800/500?random=5",
        "https://picsum.photos/800/500?random=6",
        "https://picsum.photos/800/500?random=7",
        "https://picsum.photos/800/500?random=8",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isBookingOpen, setIsBookingOpen] = useState(false); // Trạng thái Popup

    const handleNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    // Đóng popup khi click ra ngoài overlay
    const handleOverlayClick = (e) => {
        if (e.target.className === 'booking-overlay') setIsBookingOpen(false);
    };

    return (
        <main className="detail-container">
            <div className="detail-grid">
                <div className="detail-main-content">
                    {/* Gallery Section */}
                    <section className="gallery">
                        <div className="main-image-wrapper">
                            <img src={images[currentIndex]} className="main-image" alt="Phòng chính"/>
                            <button className="nav-btn prev" onClick={handlePrev}><IconChevronRight style={{transform: 'rotate(180deg)'}}/></button>
                            <button className="nav-btn next" onClick={handleNext}><IconChevronRight/></button>
                        </div>
                        <div className="thumb-grid">
                            {images.map((img, index) => (
                                <div key={index} className={`thumb-item ${index === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}>
                                    <img src={img} alt={`Thumb ${index}`}/>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Các section khác giữ nguyên... */}
                    <section className="detail-section">
                        <div className="section-title"><span className="title-line"></span> Mô tả chi tiết</div>
                        <div className="description-text">
                            <p>Chào mừng bạn đến với căn hộ Studio cao cấp tại Vinhomes Central Park. Phù hợp cho sinh viên hoặc người đi làm muốn tìm không gian yên tĩnh, an ninh 24/7.</p>
                        </div>
                    </section>

                    <section className="detail-section">
                        <div className="section-title"><span className="title-line"></span> Tiện ích căn hộ</div>
                        <div className="amenities-grid">
                            <div className="amenity-box"><IconWifi/> <span>Wifi tốc độ cao</span></div>
                            <div className="amenity-box"><IconAc/> <span>Máy lạnh Inverter</span></div>
                            <div className="amenity-box"><IconWashingMachine/> <span>Máy giặt</span></div>
                            <div className="amenity-box"><IconFridge/> <span>Tủ lạnh</span></div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="detail-sidebar">
                    <div className="sticky-box">
                        <div className="post-header-sidebar">
                            <span className="post-category">Căn hộ Studio</span>
                            <h1 className="post-title">Căn hộ Studio cao cấp Vinhomes Central Park - Full nội thất</h1>
                            <div className="post-meta-top">
                                <span className="post-id">Mã tin: #129304</span>
                                <span className="post-time">Đăng 2 giờ trước</span>
                            </div>
                        </div>
                        <div className="price-card">
                            <p className="label">Giá thuê hàng tháng</p>
                            <h2 className="price-value">8.500.000đ</h2>
                            <div className="stats-row">
                                <div className="stat-item"><span className="stat-label">Diện tích</span><span
                                    className="stat-val">35 m²</span></div>
                                <div className="stat-item"><span className="stat-label">Đặt cọc</span><span
                                    className="stat-val">1 tháng</span></div>
                            </div>

                            {/* Nút mở Popup */}
                            <button className="btn-primary" onClick={() => setIsBookingOpen(true)}>Đặt lịch xem phòng
                            </button>

                            <div className="action-buttons">
                                <button className="btn-outline"><IconBookmark/> Lưu tin</button>
                                <button className="btn-outline"><IconShare/> Chia sẻ</button>
                            </div>
                        </div>

                        <div className="landlord-card">
                            <img src="https://i.pravatar.cc/150?u=tam" className="avatar" alt="Chủ trọ"/>
                            <div className="landlord-info">
                                <h4>Nguyễn Minh Tâm</h4>
                                <div className="verified-badge"><IconVerified width="14"/> Chủ trọ xác thực</div>
                            </div>
                            <button className="btn-chat">Nhắn tin</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- BOOKING MODAL --- */}
            {isBookingOpen && (
                <div className="booking-overlay" onClick={handleOverlayClick}>
                    <div className="booking-modal">
                        <button className="close-modal" onClick={() => setIsBookingOpen(false)}>&times;</button>

                        <div className="modal-header">
                            <h3>Đặt lịch xem phòng</h3>
                            <p>Vui lòng chọn thời gian phù hợp, chủ nhà sẽ sớm liên hệ xác nhận với bạn.</p>
                        </div>

                        <form className="booking-form" onSubmit={(e) => { e.preventDefault(); alert('Đã gửi yêu cầu!'); setIsBookingOpen(false); }}>
                            <div className="form-group">
                                <label>Ngày xem phòng</label>
                                <input type="date" required className="form-input" min={new Date().toISOString().split('T')[0]} />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Giờ bắt đầu</label>
                                    <input type="time" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Giờ kết thúc (dự kiến)</label>
                                    <input type="time" required className="form-input" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Lời nhắn cho chủ nhà (Tùy chọn)</label>
                                <textarea className="form-input text-area" placeholder="Ví dụ: Tôi muốn xem thêm khu vực gửi xe..."></textarea>
                            </div>

                            <button type="submit" className="btn-submit">Xác nhận đặt lịch</button>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Detail;