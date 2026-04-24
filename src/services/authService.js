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