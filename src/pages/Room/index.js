import React from 'react';
import './Room.css';
import Sidebar from '../../components/Sidebar';
import PropertyCard from '../../components/PropertyCard';
import Pagination from "../../components/Pagination";
import { IconChevronRight } from '../../assets/Icons';

function Room() {
    return (
        <main className="room-page-main">
            <div className="room-header-context">
                <nav className="breadcrumb">
                    <span>Trang chủ</span>
                    <IconChevronRight width="12" />
                    <span>Phòng</span>
                </nav>

                {/* Phần Header Toolbar mới */}
                <div className="room-header-toolbar">
                    <div className="header-title-group">
                        <h1 className="text-4xl font-extrabold">Kết quả cho "Nexus Living"</h1>
                        <p className="results-count">Hiển thị 12 khu lưu trú được chọn lọc</p>
                    </div>

                    <div className="sort-container">
                        <select className="room-sort-select">
                            <option>Sắp xếp: Phổ biến nhất</option>
                            <option>Giá: Thấp đến Cao</option>
                            <option>Giá: Cao đến Thấp</option>
                            <option>Mới nhất</option>
                        </select>
                        <div className="sort-icon">
                            <IconChevronRight width="16" style={{ transform: 'rotate(90deg)' }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="room-layout-grid">
                <Sidebar />

                <section className="room-listing-section">
                    <div className="property-grid">
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                        <PropertyCard />
                    </div>

                    <Pagination/>
                </section>
            </div>
        </main>
    );
}

export default Room;