import React, { useState } from 'react';
import './Detail.css';
import {
    IconWifi, IconAc, IconVerified, IconBookmark,
    IconChevronRight, IconShare, IconWashingMachine,
    IconFridge, IconSecurity, IconParking, IconLocationSolid
} from '../../assets/Icons';

function Detail() {
    // Danh sách 8 ảnh mẫu
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

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <main className="detail-container">
            <div className="detail-grid">

                <div className="detail-main-content">
                    {/* Gallery Section */}
                    <section className="gallery">
                        <div className="main-image-wrapper">
                            <img src={images[currentIndex]} className="main-image" alt="Phòng chính"/>

                            <button className="nav-btn prev" onClick={handlePrev}>
                                <IconChevronRight style={{transform: 'rotate(180deg)'}}/>
                            </button>
                            <button className="nav-btn next" onClick={handleNext}>
                                <IconChevronRight/>
                            </button>
                        </div>

                        <div className="thumb-grid">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumb-item ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <img src={img} alt={`Thumb ${index}`}/>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="detail-section">
                        <div className="section-title">
                            <span className="title-line"></span> Mô tả chi tiết
                        </div>
                        <div className="description-text">
                            <p>Chào mừng bạn đến với căn hộ Studio cao cấp tại Vinhomes Central Park. Căn phòng được
                                thiết kế tối giản, hiện đại với đầy đủ nội thất từ giường nệm cao cấp đến khu vực bếp
                                riêng biệt. Phù hợp cho sinh viên hoặc người đi làm muốn tìm không gian yên tĩnh, an
                                ninh 24/7.</p>
                        </div>
                    </section>

                    <section className="detail-section">
                        <div className="section-title">
                            <span className="title-line"></span> Tiện ích căn hộ
                        </div>
                        <div className="amenities-grid">
                            <div className="amenity-box"><IconWifi/> <span>Wifi tốc độ cao</span></div>
                            <div className="amenity-box"><IconAc/> <span>Máy lạnh Inverter</span></div>
                            <div className="amenity-box"><IconWashingMachine/> <span>Máy giặt</span></div>
                            <div className="amenity-box"><IconFridge/> <span>Tủ lạnh</span></div>
                            <div className="amenity-box"><IconParking/> <span>Bãi đỗ xe</span></div>
                            <div className="amenity-box"><IconSecurity/> <span>Camera an ninh</span></div>
                        </div>
                    </section>
                    <section className="detail-section">
                        <div className="section-header-flex">
                            <div className="section-title">
                                <span className="title-line"></span> Vị trí trên bản đồ
                            </div>
                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noreferrer"
                                className="map-link"
                            >
                                Xem trên Google Maps
                            </a>
                        </div>

                        <div className="map-container">
                            <img
                                src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/106.7218,10.7950,15,0/800x400?access_token=YOUR_TOKEN"
                                alt="Bản đồ vị trí"
                                className="map-placeholder"
                            />
                            <div className="map-marker-floating">
                                <IconLocationSolid color="white" width="30" height="30"/>
                                <div className="marker-pulse"></div>
                            </div>

                            <div className="map-address-card">
                                <IconLocationSolid width="18" color="#1A73E8"/>
                                <span>Vinhomes Central Park, P.22, Bình Thạnh, TP.HCM</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="detail-sidebar">
                    <div className="sticky-box">
                        <div className="price-card">
                            <p className="label">Giá thuê hàng tháng</p>
                            <h2 className="price-value">8.500.000đ</h2>

                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-label">Diện tích</span>
                                    <span className="stat-val">35 m²</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-label">Đặt cọc</span>
                                    <span className="stat-val">1 tháng</span>
                                </div>
                            </div>

                            <button className="btn-primary">Đặt lịch xem phòng</button>

                            <div className="action-buttons">
                                <button className="btn-outline"><IconBookmark/> Lưu tin</button>
                                <button className="btn-outline"><IconShare /> Chia sẻ</button>
                            </div>
                        </div>

                        <div className="landlord-card">
                            <img src="https://i.pravatar.cc/150?u=tam" className="avatar" alt="Chủ trọ" />
                            <div className="landlord-info">
                                <h4>Nguyễn Minh Tâm</h4>
                                <div className="verified-badge"><IconVerified width="14" /> Chủ trọ xác thực</div>
                            </div>
                            <button className="btn-chat">Nhắn tin</button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default Detail;