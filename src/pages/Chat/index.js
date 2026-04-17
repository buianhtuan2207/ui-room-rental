import React from 'react';
import './Chat.css';

function Chat() {
    return (
        <main className="chat-page-wrapper flex bg-white">
            {/* Sidebar bên trái */}
            <aside className="chat-sidebar">
                <div className="chat-sidebar-header">
                    <div className="chat-flex-between">
                        <h3 className="chat-sidebar-title">Tin nhắn gần đây</h3>
                        <button className="chat-icon-btn-rounded material-symbols-outlined">edit_square</button>
                    </div>
                    <div className="chat-search-container">
                        <span className="chat-search-icon material-symbols-outlined">search</span>
                        <input className="chat-search-input" placeholder="Tìm kiếm người dùng..." type="text" />
                    </div>
                </div>

                <div className="chat-list-scroll chat-custom-scrollbar">
                    {/* Item đang chọn */}
                    <div className="chat-item active">
                        <div className="chat-avatar-ring">
                            <img className="chat-avatar-img" src="https://i.pravatar.cc/150?u=1" alt="avatar" />
                            <div className="chat-online-dot"></div>
                        </div>
                        <div className="chat-item-body">
                            <div className="chat-flex-between">
                                <span className="chat-name">Julianne Moore</span>
                                <span className="chat-meta">2 phút</span>
                            </div>
                            <p className="chat-preview active-text">Tôi đã gửi hợp đồng thuê Soho Loft...</p>
                        </div>
                        <div className="chat-unread-badge">2</div>
                    </div>

                    {/* Item thường */}
                    <div className="chat-item">
                        <div className="chat-avatar-ring">
                            <img className="chat-avatar-img" src="https://i.pravatar.cc/150?u=2" alt="avatar" />
                        </div>
                        <div className="chat-item-body">
                            <div className="chat-flex-between">
                                <span className="chat-name">Marcus Sterling</span>
                                <span className="chat-meta">1 giờ</span>
                            </div>
                            <p className="chat-preview">Khu vườn trên sân thượng có mở không?</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Cửa sổ chat bên phải */}
            <section className="chat-window">
                <header className="chat-window-header">
                    <div className="chat-user-info">
                        <img className="chat-header-avatar" src="https://i.pravatar.cc/150?u=1" alt="active-user" />
                        <div>
                            <h4 className="chat-header-name">Julianne Moore</h4>
                            <p className="chat-header-status">online</p>
                        </div>
                    </div>
                    <div className="chat-header-actions">
                        <button className="chat-action-btn material-symbols-outlined">call</button>
                        <button className="chat-action-btn material-symbols-outlined">more_vert</button>
                    </div>
                </header>

                <div className="chat-messages-area chat-custom-scrollbar">
                    <div className="chat-bubble-container received">
                        <img className="chat-msg-avatar" src="https://i.pravatar.cc/150?u=1" alt="" />
                        <div className="chat-bubble">Chào bạn! Bạn đã xem qua hợp đồng chưa?</div>
                    </div>

                    <div className="chat-bubble-container sent">
                        <div className="chat-bubble">Dạ mình đang xem rồi ạ, cảm ơn bạn nhiều!</div>
                    </div>
                </div>

                <footer className="chat-input-wrapper">
                    <div className="chat-input-bar">
                        <button className="chat-input-tool material-symbols-outlined">add_circle</button>
                        <input className="chat-input-field" placeholder="Viết tin nhắn..." />
                        <button className="chat-send-btn">
                            <span className="material-symbols-outlined">send</span>
                        </button>
                    </div>
                </footer>
            </section>
        </main>
    );
}

export default Chat;