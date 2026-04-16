import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Room from "../pages/Room";
import Detail from "../pages/Detail";
import Login from "../pages/Login";
import Verify from '../pages/Verify';
import ForgotPassword from '../pages/ForgotPassword';
import Register from '../pages/Register';
import Profile from "../pages/Profile";
import PostRoom from "../pages/PostRoom";
import Favorites from "../pages/Favorites";

// Import trang Dashboard mới
import AdminDashboard from '../pages/AdminDashboard';

function AppRoutes() {
    return (
        <Routes>
            {/* 1. Nhóm Route cho Authentication & Guest: Không dùng Layout chung */}
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />

            {/* 2. Route cho Admin Dashboard: 
                Trang này tự có Sidebar/Header riêng theo thiết kế của bạn nên không dùng MainLayout */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* 3. Nhóm Route dùng MainLayout cho khách hàng (Header/Footer/Sidebar người dùng) */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/room" element={<Room />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/post" element={<PostRoom />} />
            </Route>

            {/* 4. Điều hướng mặc định */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;