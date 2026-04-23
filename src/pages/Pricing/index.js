import React, { useState } from 'react';
import './Pricing.css';

function PricingPage() {

    const [isPersonal, setIsPersonal] = useState(true);

    // State cho Accordion FAQ (Lưu index của câu hỏi đang mở)
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const handleSelectPlan = (planName) => {
        alert(`Bạn đang chọn ${planName}. Đang chuyển hướng...`);
    };

    const faqs = [
        { q: "Tôi có thể thanh toán bằng những hình thức nào?", a: "Chúng tôi hỗ trợ đa dạng phương thức: Ví MoMo, VNPay, Chuyển khoản ngân hàng và thẻ Visa/Mastercard. Toàn bộ giao dịch đều được mã hóa an toàn." },
        { q: "Tin đăng của tôi sẽ hiển thị trong bao lâu?", a: "Mặc định mỗi lượt đăng tin có hiệu lực trong 30 ngày. Bạn có thể gia hạn bất kỳ lúc nào để duy trì vị trí hiển thị hoặc đăng ký gói tự động gia hạn." },
        { q: "Quy định về hình ảnh như thế nào?", a: "Hình ảnh phải là ảnh thật của phòng, không chứa logo của các sàn giao dịch khác, không chứa số điện thoại chèn trên ảnh. Ảnh chất lượng cao sẽ thu hút hơn 40%." },
        { q: "Chính sách hoàn tiền khi tin không được duyệt?", a: "Nếu tin đăng vi phạm chính sách và không được duyệt, chúng tôi sẽ hoàn trả số tiền vào ví Nexus của bạn để bạn có thể chỉnh sửa và đăng lại." }
    ];

    return (
        <main className="pricing-container">
            {/* Hero & Toggle Section */}
            <header className="pricing-header">
                <h1>Bảng giá dịch vụ đăng tin</h1>
                <p>Lựa chọn gói dịch vụ phù hợp để tiếp cận hàng ngàn sinh viên đang tìm kiếm không gian sống lý tưởng.</p>

                <div className="toggle-wrapper">
                    <button
                        className={`toggle-btn ${isPersonal ? 'active' : ''}`}
                        onClick={() => setIsPersonal(true)}
                    >
                        Cá nhân
                    </button>
                    <button
                        className={`toggle-btn ${!isPersonal ? 'active' : ''}`}
                        onClick={() => setIsPersonal(false)}
                    >
                        Doanh nghiệp
                    </button>
                </div>
            </header>

            {/* Pricing Grid */}
            <div className="pricing-grid">
                {/* Gói Thường */}
                <div className="pricing-card">
                    <div className="card-header">
                        <h3>Gói Thường</h3>
                        <p>Dành cho chủ nhà muốn thử nghiệm dịch vụ cơ bản.</p>
                    </div>
                    <div className="card-price">
                        <div className="price">0đ</div>
                        <div className="period">/tin đăng /30 ngày</div>
                    </div>
                    <ul className="card-features">
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Đăng tối đa 3 ảnh</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Hiển thị cơ bản</li>
                        <li className="disabled"><span className="material-symbols-outlined">cancel</span> Huy hiệu xác minh</li>
                        <li className="disabled"><span className="material-symbols-outlined">cancel</span> Ưu tiên tìm kiếm</li>
                    </ul>
                    <button className="btn-outline" onClick={() => handleSelectPlan('Gói Thường')}>Chọn gói</button>
                </div>

                {/* Gói Pro */}
                <div className="pricing-card pro-card">
                    <div className="popular-badge">Phổ biến nhất</div>
                    <div className="card-header">
                        <h3>Gói Pro</h3>
                        <p>Tăng tốc độ cho thuê với huy hiệu nổi bật.</p>
                    </div>
                    <div className="card-price">
                        <div className="price">50.000đ</div>
                        <div className="period">/tin đăng /30 ngày</div>
                    </div>
                    <ul className="card-features">
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Đăng tối đa 10 ảnh</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Huy hiệu "Tin nổi bật"</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Thứ hạng tìm kiếm cao hơn</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Thống kê lượt xem tin</li>
                    </ul>
                    <button className="btn-primary" onClick={() => handleSelectPlan('Gói Pro')}>Chọn gói</button>
                </div>

                {/* Gói Premium */}
                <div className="pricing-card">
                    <div className="card-header">
                        <h3>Gói Premium</h3>
                        <p>Giải pháp toàn diện cho môi giới chuyên nghiệp.</p>
                    </div>
                    <div className="card-price">
                        <div className="price">120.000đ</div>
                        <div className="period">/tin đăng /30 ngày</div>
                    </div>
                    <ul className="card-features">
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Đăng tối đa 20 ảnh + Video</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Luôn hiển thị tại Top trang chủ</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Hỗ trợ ưu tiên 24/7</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Quảng bá trên Social Media</li>
                        <li><span className="material-symbols-outlined text-success">check_circle</span> Huy hiệu "Đối tác tin cậy"</li>
                    </ul>
                    <button className="btn-outline" onClick={() => handleSelectPlan('Gói Premium')}>Chọn gói</button>
                </div>
            </div>

            {/* Trust Section */}
            <section className="trust-section">
                <div className="trust-main">
                    <img className="trust-bg" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="background" />
                    <div className="trust-content">
                        <h2>Tại sao chọn Nexus Living?</h2>
                        <p>Chúng tôi không chỉ cung cấp nền tảng đăng tin, chúng tôi xây dựng cầu nối tin cậy giữa sinh viên và chủ nhà với hơn 500,000 người dùng hàng tháng.</p>
                        <div className="tags">
                            <span>#1 Student Choice</span>
                            <span>Dữ liệu minh bạch</span>
                        </div>
                    </div>
                </div>
                <div className="trust-stats">
                    <div className="stat-item">
                        <div className="icon-circle"><span className="material-symbols-outlined">verified_user</span></div>
                        <div>
                            <strong>98% Xác minh</strong>
                            <p>Tài khoản được kiểm duyệt</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="icon-circle"><span className="material-symbols-outlined">speed</span></div>
                        <div>
                            <strong>7 Ngày trung bình</strong>
                            <p>Để tìm được khách thuê</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div className="icon-circle"><span className="material-symbols-outlined">payments</span></div>
                        <div>
                            <strong>Hoàn tiền 100%</strong>
                            <p>Nếu tin bị lỗi hệ thống</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <h2>Câu hỏi thường gặp</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeFaq === index ? 'open' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question">
                                <h4>{faq.q}</h4>
                                <span className="material-symbols-outlined">
                                    {activeFaq === index ? 'remove' : 'add'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default PricingPage;