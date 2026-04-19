import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import './Header.css';
import {IconSearch} from "../../assets/Icons";


function Header (){
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    // State để quản lý trạng thái mở/đóng menu trên mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Hàm toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="header-nav">
            <div className="header-container">

                <div className="brand-and-nav">

                    {/* Nút Hamburger 3 gạch (Chỉ hiện trên mobile) */}
                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                    <span className="material-symbols-outlined">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                    </button>

                    <Link to="/" className="header-logo">
                        TroSinhVien
                    </Link>

                    {/* Danh sách Menu - Thêm class 'open' nếu state isMenuOpen là true */}
                    <div className={`header-nav-links ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to="/room" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                            Phòng
                        </NavLink>
                        <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                            Gói Tin
                        </NavLink>
                        <NavLink to="/uudai" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                            Ưu Đãi
                        </NavLink>
                        <NavLink to="/blog" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                            Blog
                        </NavLink>
                        <NavLink to="/lienhe" className={({isActive}) => isActive ? "nav-link-active" : "nav-link"}>
                            Liên Hệ
                        </NavLink>
                    </div>
                </div>

                <div className="search-container">
                    <IconSearch className="search-icon-svg"/>
                    <input className="search-input" placeholder="Search..." type="text"/>
                </div>

                <button onClick={handleLoginClick} className="btn-login">Đăng nhập</button>

            </div>
        </nav>
    );
};

export default Header;