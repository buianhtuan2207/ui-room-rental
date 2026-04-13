import React from 'react';
import './Sidebar.css';
import { IconVerified } from '../../assets/Icons';

function Sidebar() {
    return (
        <aside className="room-sidebar">
            <div className="filter-card">

                <div className="filter-section">
                    <h3 className="filter-title">Khoảng giá</h3>
                    <div className="chip-group">
                        {['Dưới 1tr', '1tr - 2tr', '2tr - 5tr', 'Trên 5tr'].map((range, index) => (
                            <button key={index} className="chip-btn">
                                {range}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-section">
                    <h3 className="filter-title">Diện tích</h3>
                    <div className="chip-group">
                        {['Dưới 20m²', '20m² - 30m²', 'Trên 30m²'].map((area, index) => (
                            <button key={index} className="chip-btn">
                                {area}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-section">
                    <h3 className="filter-title">Tiện ích</h3>
                    <div className="amenity-list">
                        <label className="amenity-item">
                            <input type="checkbox" />
                            <span>Wifi miễn phí</span>
                        </label>
                        <label className="amenity-item">
                            <input type="checkbox" />
                            <span>Tủ lạnh</span>
                        </label>
                        <label className="amenity-item">
                            <input type="checkbox" />
                            <span>Máy giặt</span>
                        </label>
                        <label className="amenity-item">
                            <input type="checkbox" />
                            <span>Điều hòa</span>
                        </label>
                    </div>
                </div>

                <button className="reset-filter-btn">
                    Xóa tất cả bộ lọc
                </button>
            </div>

            <div className="verified-card">
                <div className="verified-bg-icon">
                    <IconVerified width="120" height="120" />
                </div>
                <h4 className="verified-header">
                    <IconVerified width="20" height="20" />
                    Danh sách đã xác thực
                </h4>
                <p className="verified-desc">
                    Mỗi phòng đều được kiểm tra trực tiếp về chất lượng và độ an toàn.
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;