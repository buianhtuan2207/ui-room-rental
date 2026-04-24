const API_URL = 'http://localhost:8080/room-rental/api/auth';

export const loginApi = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            // Ném lỗi để bên Page có thể bắt được và hiển thị
            throw new Error('Sai tài khoản hoặc mật khẩu!');
        }

        const data = await response.json();
        return data; // Trả về dữ liệu (thường chứa token)
    } catch (error) {
        throw error;
    }
};
export const registerApi = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData), // Gửi cục dữ liệu gồm username, email, password, role
        });

        if (!response.ok) {
            // Cố gắng lấy thông báo lỗi từ backend (nếu có)
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.message || 'Đăng ký thất bại. Email hoặc tài khoản có thể đã tồn tại!');
        }

        // Tùy backend của bạn trả về JSON hay String, thường đăng ký thành công sẽ trả về thông báo hoặc user data
        const data = await response.json().catch(() => 'Đăng ký thành công');
        return data;
    } catch (error) {
        throw error;
    }
};