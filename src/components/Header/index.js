import React from 'react';
import {Link, NavLink} from 'react-router-dom';
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
                        <NavLink to="/room" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Phòng
                        </NavLink>
                        <NavLink to="/phongghep" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Phòng Ghép
                        </NavLink>
                        <NavLink to="/uudai" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Ưu Đãi
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Blog
                        </NavLink>
                        <NavLink to="/lienhe" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                            Liên Hệ
                        </NavLink>
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