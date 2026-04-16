import React from 'react';
import './PostRoom.css';

function PostRoom() {
    return (
        <main className="post-room-container">
            <div className="post-room-grid">

                {/* Form Canvas (Bên trái) */}
                <div className="form-canvas">

                    {/* Section 1: Basic Info */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="material-symbols-outlined icon-primary">home</span>
                            <h2>Thông tin cơ bản</h2>
                        </div>

                        <div className="input-grid">
                            <div className="col-full">
                                <label>Tiêu đề tin đăng</label>
                                <input type="text" placeholder="Ví dụ: Căn hộ Studio cao cấp gần ĐH Quốc Gia" />
                            </div>
                            <div>
                                <label>Giá cho thuê (VND/tháng)</label>
                                <input type="number" placeholder="5,000,000" />
                            </div>
                            <div>
                                <label>Diện tích (m²)</label>
                                <input type="number" placeholder="30" />
                            </div>
                            <div className="col-full">
                                <label>Địa chỉ chi tiết</label>
                                <div className="input-with-icon">
                                    <span className="material-symbols-outlined">location_on</span>
                                    <input type="text" placeholder="Nhập số nhà, tên đường, phường..." />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Amenities */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="material-symbols-outlined icon-primary">grid_view</span>
                            <h2>Tiện ích có sẵn</h2>
                        </div>
                        <div className="amenities-grid">
                            {['Điều hòa', 'Wifi', 'Chỗ để xe', 'Máy giặt', 'Tủ lạnh', 'An ninh', 'Nước nóng', 'Thang máy'].map((item) => (
                                <label key={item} className="amenity-checkbox">
                                    <input type="checkbox" />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Description */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="material-symbols-outlined icon-primary">description</span>
                            <h2>Mô tả chi tiết</h2>
                        </div>
                        <textarea placeholder="Mô tả về môi trường sống, nội thất, quy định chung của phòng..." rows="6"></textarea>
                    </section>

                    {/* Section 4: Image Upload */}
                    <section className="form-section">
                        <div className="section-header">
                            <span className="material-symbols-outlined icon-primary">add_a_photo</span>
                            <h2>Hình ảnh phòng</h2>
                        </div>
                        <div className="upload-dropzone">
                            <div className="upload-icon-circle">
                                <span className="material-symbols-outlined">upload</span>
                            </div>
                            <p className="upload-main-text">Kéo thả hoặc nhấp để tải ảnh</p>
                            <p className="upload-sub-text">Hỗ trợ JPG, PNG (Tối đa 10 ảnh, mỗi ảnh &lt; 5MB)</p>
                        </div>

                        <div className="image-preview-grid">
                            <div className="preview-item">
                                <img src="https://picsum.photos/400/400?random=15" alt="Preview" />
                                <button className="btn-remove-img">
                                    <span className="material-symbols-outlined">close</span>
                                </button>
                            </div>
                            <div className="add-more-img">
                                <span className="material-symbols-outlined">add</span>
                            </div>
                        </div>
                    </section>

                    {/* Action Buttons */}
                    <div className="post-actions">
                        <button className="btn-outline-post">Lưu nháp</button>
                        <button className="btn-primary-post">Đăng tin ngay</button>
                    </div>
                </div>

                {/* Sidebar Guidance (Bên phải) */}
                <aside className="post-sidebar">
                    <div className="guide-card">
                        <div className="guide-header">
                            <span className="material-symbols-outlined">lightbulb</span>
                            <h3>Mẹo đăng tin hiệu quả</h3>
                        </div>
                        <ul className="guide-list">
                            <li>
                                <strong>01.</strong> Hình ảnh là quan trọng nhất. Hãy chụp vào ban ngày.
                            </li>
                            <li>
                                <strong>02.</strong> Giá minh bạch giúp lọc khách hàng tiềm năng.
                            </li>
                            <li>
                                <strong>03.</strong> Mô tả cụ thể khoảng cách đến các trường ĐH.
                            </li>
                        </ul>
                        <span className="material-symbols-outlined bg-icon">tips_and_updates</span>
                    </div>

                    <div className="support-card">
                        <h3>Cần hỗ trợ?</h3>
                        <div className="support-item">
                            <div className="support-icon-box"><span className="material-symbols-outlined">headset_mic</span></div>
                            <div>
                                <p className="support-label">Hotline 24/7</p>
                                <p className="support-val">1900 6789</p>
                            </div>
                        </div>
                        <div className="support-item">
                            <div className="support-icon-box"><span className="material-symbols-outlined">mail</span></div>
                            <div>
                                <p className="support-label">Email hỗ trợ</p>
                                <p className="support-val">support@editorial.vn</p>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}

export default PostRoom;