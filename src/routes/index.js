import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Room from "../pages/Room";
import Detail from "../pages/Detail";

function AppRoutes (){
    return (
        <Routes>
            {/* Khung Layout bọc ngoài cùng */}
            <Route element={<MainLayout />}>
                {/* Các trang con nằm bên trong */}
                <Route path="/" element={<Home />} />
                <Route path="/room" element={<Room />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;