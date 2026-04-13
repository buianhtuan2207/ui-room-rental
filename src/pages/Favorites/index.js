import React, { useState, useEffect } from 'react';
import './Favorites.css';
import PropertyCard from '../../components/PropertyCard';
import { IconFavorite } from '../../assets/Icons';

function Favorites() {
    const [favoriteRooms, setFavoriteRooms] = useState([
        {
            id: 1,
            title: "The Nexus Studio - Quận 3",
            price: "7.500.000",
            address: "Sẵn sàng 500m tới ĐH Kinh Tế",
            image: "https://picsum.photos/400/300?random=1",
            status: "Còn trống"
        },
        {
            id: 2,
            title: "Luxury Apartment - Bình Thạnh",
            price: "12.000.000",
            address: "Vinhomes Central Park",
            image: "https://picsum.photos/400/300?random=2",
            status: "Sắp trống"
        }
    ]);

    return (
        <main className="favorites-page">
            <header className="favorites-header">
                <div className="header-title">
                    <IconFavorite width="28" height="28" color="#dc2626" />
                    <h1>Danh sách yêu thích</h1>
                </div>
                <p className="header-subtitle">
                    Lưu trữ những căn phòng bạn ưng ý nhất ({favoriteRooms.length} phòng)
                </p>
            </header>

            {favoriteRooms.length > 0 ? (
                <div className="favorites-grid">
                    {favoriteRooms.map(room => (
                        <PropertyCard key={room.id} data={room} />
                    ))}
                </div>
            ) : (
                <div className="empty-favorites">
                    <div className="empty-icon">❤️</div>
                    <h2>Chưa có phòng yêu thích</h2>
                    <p>Hãy dạo quanh một vòng và nhấn "Lưu tin" cho những căn phòng bạn thích nhé!</p>
                    <button className="btn-go-home" onClick={() => window.location.href = '/'}>
                        Khám phá ngay
                    </button>
                </div>
            )}
        </main>
    );
}

export default Favorites;