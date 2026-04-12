import React from 'react';
import './Home.css';

function Home() {
    return (
        <main className="home-main">
            {/* 1. SECTION HERO */}
            <section className="hero-section">
                <div className="hero-blur-1"></div>
                <div className="hero-blur-2"></div>
                <div className="hero-content">
                    <h1 className="hero-title">
                        Tìm kiếm <span className="text-primary">Không gian</span><br/>Sống Lý Tưởng.
                    </h1>
                    <p className="hero-subtitle">
                        Nền tảng biên tập các căn hộ, phòng trọ sinh viên được tuyển chọn kỹ lưỡng,
                        mang lại sự an tâm tuyệt đối cho hành trình học tập của bạn.
                    </p>

                    <div className="search-bar-container">
                        <div className="search-fields">
                            <div className="field-group border-right">
                                <label>Vị trí</label>
                                <div className="input-with-icon">
                                    <input type="text" placeholder="Khu vực, Quận..." />
                                </div>
                            </div>
                            <div className="field-group border-right">
                                <label>Trường đại học</label>
                                <div className="input-with-icon">
                                    <input type="text" placeholder="Đại học Bách Khoa..." />
                                </div>
                            </div>
                            <div className="field-group">
                                <label>Ngân sách</label>
                                <div className="input-with-icon">
                                    <select>
                                        <option>Dưới 5 triệu</option>
                                        <option>5 - 10 triệu</option>
                                        <option>Trên 10 triệu</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button className="btn-search-main">Tìm kiếm ngay</button>
                    </div>
                </div>
            </section>

            {/* 2. SECTION CATEGORIES (BENTO GRID) */}
            <section className="section-container">
                <div className="section-header">
                    <h2 className="section-headline">Khám phá theo loại hình</h2>
                    <p className="section-sub-headline">Lựa chọn phong cách sống phù hợp nhất với nhu cầu.</p>
                </div>
                <div className="bento-grid">
                    <div className="bento-item big">
                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="Căn hộ" />
                        <div className="bento-overlay">
                            <p>Riêng tư & Tiện nghi</p>
                            <h3>Căn hộ dịch vụ</h3>
                        </div>
                    </div>
                    <div className="bento-stack">
                        <div className="bento-item small">
                            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="Phòng đơn" />
                            <div className="bento-overlay"><h3>Phòng đơn</h3></div>
                        </div>
                        <div className="bento-item small">
                            <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="KTX" />
                            <div className="bento-overlay"><h3>Ký túc xá cao cấp</h3></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SECTION FEATURED ROOMS */}
            <section className="section-container bg-light-gray">
                <div className="flex-header">
                    <h2 className="section-headline">Phòng tốt nhất gần trường</h2>
                    <button className="btn-text-link">Xem tất cả →</button>
                </div>

                {/* Wide Card 1 */}
                <div className="wide-card">
                    <div className="card-img-box">
                        <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb" alt="Room" />
                        <span className="price-badge">7.500.000đ / tháng</span>
                    </div>
                    <div className="card-info">
                        <div className="card-tags">
                            <span className="tag-green">Sẵn sàng</span>
                            <span className="tag-gray">500m tới ĐH Kinh Tế</span>
                        </div>
                        <h3>The Nexus Studio - Quận 3</h3>
                        <p className="card-desc">Căn hộ studio thiết kế riêng cho sinh viên với đầy đủ nội thất cao cấp, ánh sáng tự nhiên ngập tràn.</p>
                        <div className="amenities">
                            <span><i className="material-symbols-outlined">wifi</i> Siêu tốc</span>
                            <span><i className="material-symbols-outlined">security</i> Bảo vệ 24/7</span>
                        </div>
                        <div className="card-footer">
                            <span className="verified">
                                <span className="material-symbols-outlined">verified</span> Chủ nhà tin cậy
                            </span>
                            <button className="btn-primary-sm">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECTION PROMOTION BANNER */}
            <section className="section-container">
                <div className="promo-banner">
                    <div className="promo-content">
                        <h2>Ưu đãi độc quyền cho Tân sinh viên 2026</h2>
                        <p>Giảm ngay 10% tháng thuê đầu tiên và miễn phí phí dịch vụ cho các hợp đồng ký sớm.</p>
                        <div className="promo-btns">
                            <button className="btn-white">Nhận mã ưu đãi</button>
                            <button className="btn-outline-white">Tìm hiểu thêm</button>
                        </div>
                    </div>
                    <div className="promo-stats">
                        <div className="stat-box">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Ưu đãi đã nhận</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-number">12</span>
                            <span className="stat-label">Ngày còn lại</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;