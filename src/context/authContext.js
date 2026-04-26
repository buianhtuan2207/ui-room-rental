import React, { createContext, useState, useEffect, useContext } from 'react';

// Khởi tạo Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Kiểm tra token khi ứng dụng vừa khởi chạy
    useEffect(() => {
        const checkLoggedIn = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    // Tương lai bạn có thể gọi API getProfile ở đây để lấy thông tin user thực tế từ Backend
                    // const userData = await getMyProfileApi(token);
                    // setUser(userData);

                    // Tạm thời set một user ảo để test
                    setUser({ username: 'admin', role: 'student' });
                } catch (error) {
                    console.error("Token không hợp lệ hoặc đã hết hạn", error);
                    localStorage.removeItem('accessToken');
                }
            }
            setLoading(false); // Hoàn thành việc kiểm tra
        };

        checkLoggedIn();
    }, []);

    // Hàm xử lý khi đăng nhập thành công
    const login = (userData, token) => {
        localStorage.setItem('accessToken', token);
        setUser(userData); // Lưu thông tin user vào state toàn cục
    };

    // Hàm xử lý khi đăng xuất
    const logout = () => {
        localStorage.removeItem('accessToken');
        setUser(null); // Xóa thông tin user
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {/* Chỉ render các component con khi đã kiểm tra xong trạng thái đăng nhập */}
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom Hook để các component khác gọi ra dùng cho nhanh
export const useAuth = () => {
    return useContext(AuthContext);
};