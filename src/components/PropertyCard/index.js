import React from 'react';
import './PropertyCard.css';
import {
    IconLocation,
    IconBed,
    IconWifi,
    IconArrowForward,
    IconFavorite,
    IconSchool
} from '../../assets/Icons';
import {useNavigate} from "react-router-dom";

function PropertyCard({ data }) {
    const room = data || {
        title: "The Nexus Studio - Quận 3",
        price: "7.500.000",
        address: "Sẵn sàng 500m tới ĐH Kinh Tế",
        image: "https://picsum.photos/400/300",
        isVerified: true,
        status: "Còn trống"
    };

    const navigate = useNavigate();

    const handleLoginClick = () => {
        // Có thể thêm logic ở đây
        navigate('/favorites');
    };

    return (
        <div className="property-card">
            <div className="card-media">
                <img src={room.image} alt={room.title} className="card-img" />

                <div className="card-badge-price">
                    <span className="price-num">{room.price}đ</span>
                    <span className="price-unit">/ tháng</span>
                </div>

                <button onClick={handleLoginClick} className="btn-favorite">
                    <IconFavorite width="20" height="20" />
                </button>

                {room.status && (
                    <div className="card-status-tag">
                        {room.status}
                    </div>
                )}
            </div>

            <div className="card-body">
                <h3 className="card-title">{room.title}</h3>

                <div className="card-info-row">
                    <IconLocation width="16" color="#747780" />
                    <span>{room.address}</span>
                </div>

                <div className="card-tags">
                    <div className="tag-item">
                        <IconSchool width="14" />
                        <span>Gần ĐH Bách Khoa</span>
                    </div>
                    <div className="tag-item">
                        <IconWifi width="14" />
                        <span>Wifi siêu tốc</span>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="amenities-summary">
                        <div className="amenity">
                            <IconBed width="16" />
                            <span>1 Giường</span>
                        </div>
                    </div>

                    <button className="btn-detail-arrow">
                        <IconArrowForward width="20" color="#1A73E8" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;