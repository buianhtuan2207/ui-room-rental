import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar Left */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1 style={{ margin: '0' }}>Nexus Living</h1>
          <p style={{ color: '#a3aed0', fontSize: '12px', margin: '0' }}>
            Bộ công cụ quản lý
          </p>
        </div>

        <nav className="nav-menu" style={{ marginTop: '30px' }}>
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-item active">
                <span className="material-symbols-outlined">dashboard</span>
                Bảng điều khiển
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                <span className="material-symbols-outlined">group</span>
                Quản lý tài khoản
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                <span className="material-symbols-outlined">apartment</span>
                Quản lý bất động sản
              </a>
            </li>
            {/* Yêu cầu 4: Đưa cài đặt và hỗ trợ vào menu phụ nếu cần, nhưng theo hình 3 thì nó nằm dưới cùng */}
          </ul>
        </nav>

        {/* Yêu cầu 4: Phần Bottom Sidebar như Hình 3 */}
        <div style={{ marginTop: 'auto' }}>
          <hr style={{ border: '0', borderTop: '1px solid #f4f7fe', margin: '20px 0' }} />
          
          <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '15px' }}>
            Thêm danh mục mới
          </button>
          
          <ul className="nav-links">
            <li>
              <a href="#" className="nav-item" style={{ padding: '8px 15px', marginBottom: '5px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span>
                Cài đặt
              </a>
            </li>
            <li>
              <a href="#" className="nav-item" style={{ padding: '8px 15px', marginBottom: '15px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>help</span>
                Hỗ trợ
              </a>
            </li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 10px' }}>
            <img src="https://i.pravatar.cc/40?img=11" alt="avatar" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
            <div>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: 'bold' }}>Bộ công cụ quản lý</p>
              <p style={{ margin: 0, fontSize: '10px', color: '#a3aed0' }}>Quản trị viên cấp cao</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-wrapper">
        <header className="header-top">
          <div className="search-bar">
            <span className="material-symbols-outlined" style={{ color: '#a3aed0' }}>search</span>
            <input type="text" placeholder="Tìm kiếm hồ sơ, người dùng..." />
          </div>
          <div style={{ display: 'flex', gap: '20px', color: '#a3aed0' }}>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>notifications</span>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>mail</span>
            <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>settings</span>
          </div>
        </header>

        <section style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              {/* Yêu cầu 1: Chữ Tổng quan in đậm */}
              <h2 style={{ fontSize: '32px', fontWeight: '800', margin: '0 0 5px 0' }}>Tổng quan</h2>
              <p style={{ color: '#a3aed0', margin: '0', fontSize: '14px' }}>Chào mừng quay trở lại, đây là những gì đang diễn ra hôm nay.</p>
            </div>
            {/* Yêu cầu 3: Nút có icon như Hình 2 */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-outline">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Xuất báo cáo
              </button>
              <button className="btn-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>campaign</span>
                Phát thông báo
              </button>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="stats-grid">
          <StatCard label="TỔNG SỐ SINH VIÊN" value="12,482" trend="+14% tháng này" trendColor="#05cd99" icon="school" />
          <StatCard label="TỔNG SỐ CHỦ NHÀ" value="843" trend="+3 mới hôm nay" trendColor="#05cd99" icon="real_estate_agent" />
          <StatCard label="CHỜ PHÊ DUYỆT" value="28" trend="! Cần xử lý" trendColor="#ee5d50" icon="pending_actions" />
          <StatCard label="DOANH THU THÁNG" value="$142k" trend="92% mục tiêu" trendColor="#2b59ff" icon="insights" />
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Cột trái: Bảng */}
          <div className="content-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '800' }}>Yêu cầu xác minh gần đây</h3>
              <a href="#" style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>Xem tất cả</a>
            </div>
            
            <table className="data-table">
              <thead>
                <tr>
                  <th>NGƯỜI DÙNG / VAI TRÒ</th>
                  <th>NGÀY GỬI</th>
                  <th>TRẠNG THÁI</th>
                  <th style={{ textAlign: 'right' }}>HÀNH ĐỘNG</th>
                </tr>
              </thead>
              <tbody>
                <TableRow name="Elena Jacobs" role="CHỦ NHÀ" date="Oct 12, 2023" status="Đang chờ" statusClass="status-pending" initial="EJ" />
                <TableRow name="Ryan Thompson" role="SINH VIÊN" date="Oct 11, 2023" status="Đã duyệt" statusClass="status-approved" initial="RT" />
                <TableRow name="Sarah Kim" role="CHỦ NHÀ" date="Oct 10, 2023" status="Bị từ chối" statusClass="status-rejected" initial="SK" />
              </tbody>
            </table>
          </div>

          {/* Cột phải: Progress Bar (Yêu cầu 5 - Hình 4) */}
          <div className="content-card">
             <h3 style={{ margin: '0', fontSize: '18px', fontWeight: '800' }}>Yêu cầu xác minh gần đây</h3>
             <p style={{fontSize: '12px', color: 'var(--text-grey)', margin: '5px 0 0 0'}}>Regional distribution of properties</p>
             
             <div className="progress-container">
                <ProgressBar label="DOWNTOWN CAMPUS" percent="42" color="#2b59ff" />
                <ProgressBar label="WEST END VILLAGE" percent="28" color="#317b62" />
                <ProgressBar label="TECH DISTRICT" percent="18" color="#cc5d33" />
                <ProgressBar label="SUBURBS" percent="12" color="#d3d5de" />
             </div>

             <div className="pro-tip">
                <span className="material-symbols-outlined">lightbulb</span>
                <p style={{fontSize: '13px', margin: 0, lineHeight: '1.5'}}>
                   <strong>Pro-tip:</strong> Listings in "Tech District" have a 25% faster turnaround time this quarter.
                </p>
             </div>
          </div>
        </div>

        {/* Yêu cầu 2: Các Action Cards dưới cùng (Hình 1) */}
        <div className="action-cards-grid">
           <ActionCard 
             icon="person_add" title="Nhật ký hoạt động" 
             desc="Kiểm tra các hành động quản trị trước đó" 
             iconBg="#e9ecf8" iconColor="#2b59ff" 
           />
           <ActionCard 
             icon="history_edu" title="Nhật ký hoạt động" 
             desc="Kiểm tra các hành động quản trị trước đó" 
             iconBg="#e6f4f1" iconColor="#317b62" 
           />
           <ActionCard 
             icon="database" title="Sao lưu dữ liệu" 
             desc="Bảo mật trạng thái cơ sở dữ liệu hiện tại" 
             iconBg="#fbeceb" iconColor="#a44026" 
           />
        </div>

      </main>
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const StatCard = ({ label, value, trend, trendColor, icon }) => (
  <div className="stat-card">
    <p className="label">{label}</p>
    <p className="value">{value}</p>
    <p className="trend" style={{ color: trendColor }}>{trend}</p>
    <span className="material-symbols-outlined" style={{position:'absolute', right: '-10px', bottom: '-15px', opacity: 0.05, fontSize: '90px'}}>{icon}</span>
  </div>
);

const TableRow = ({ name, role, date, status, statusClass, initial }) => (
  <tr>
    <td>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '36px', height: '36px', background: '#e9ecf8', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '12px', fontWeight: '800', color: '#2b59ff' }}>
          {initial}
        </div>
        <div>
          <div style={{ fontWeight: '800', color: 'var(--text-main)' }}>{name}</div>
          <div style={{ fontSize: '10px', color: 'var(--text-grey)', fontWeight: '700' }}>{role}</div>
        </div>
      </div>
    </td>
    <td style={{ color: 'var(--text-grey)', fontWeight: '600' }}>{date}</td>
    <td><span className={`status-badge ${statusClass}`}>{status}</span></td>
    <td style={{ textAlign: 'right' }}>
      <span className="material-symbols-outlined" style={{cursor: 'pointer', fontSize: '20px', color: '#2b59ff'}}>visibility</span>
    </td>
  </tr>
);

const ProgressBar = ({ label, percent, color }) => (
  <div className="progress-item">
    <div className="progress-header">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${percent}%`, backgroundColor: color }}></div>
    </div>
  </div>
);

const ActionCard = ({ icon, title, desc, iconBg, iconColor }) => (
  <div className="action-card">
    <div className="action-icon-wrapper" style={{ backgroundColor: iconBg, color: iconColor }}>
      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{icon}</span>
    </div>
    <div>
      <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', fontWeight: '800' }}>{title}</h4>
      <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-grey)', lineHeight: '1.4' }}>{desc}</p>
    </div>
  </div>
);

export default AdminDashboard;