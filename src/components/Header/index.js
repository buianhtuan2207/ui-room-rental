import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import {IconSearch} from "../../assets/Icons";


function Header (){
    return (
        <nav className="header-nav">
            <div className="header-container">

                <div className="brand-and-nav">
                    <Link to="/" className="header-logo">
                        TroSinhVien
                    </Link>
                    <div className="header-nav-links">
                        <Link to="/phong" className="nav-link-active">Phòng</Link>
                        <Link to="/phongghep" className="nav-link">Phòng Ghép</Link>
                        <Link to="/uudai" className="nav-link">Ưu Đãi</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                        <Link to="/lienhe" className="nav-link">Liên Hệ</Link>
                    </div>
                </div>

                <div className="search-container">
                    <IconSearch className="search-icon-svg" />
                    <input className="search-input" placeholder="Search..." type="text"/>
                </div>

                <button className="btn-login">Đăng nhập</button>

            </div>
        </nav>
    );
};

export default Header;