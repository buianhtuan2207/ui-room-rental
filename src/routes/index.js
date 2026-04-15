import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Room from "../pages/Room";
import Detail from "../pages/Detail";
import  Login from "../pages/Login"
import Verify from '../pages/Verify';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import Account from "../pages/Profile";

function AppRoutes() {
    return (
        <Routes>
            {/* 1. Route cho trang Login: KHÔNG dùng MainLayout */}
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />

            {/* 2. Nhóm Route dùng MainLayout (Cần Header/Footer/Sidebar) */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/room" element={<Room />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/profile" element={<Account />} />
            </Route>

            {/* 3. Xử lý khi người dùng nhập sai URL (Redirect về Home hoặc trang 404) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;