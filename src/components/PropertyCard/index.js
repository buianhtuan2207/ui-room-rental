import React from 'react';
import './PropertyCard.css';
import { IconLocation, IconArrowForward, IconFavorite } from '../../assets/Icons';
import { useNavigate } from "react-router-dom";

function PropertyCard({ data }) {
    const navigate = useNavigate();
    const post = data || {};

    const handleGoToDetail = () => {
        if (post.id) {
            console.log("Navigating with ID:", post.id);
            navigate(`/detail/${post.id}`);
        }
    };

    return (
        <div className="property-card" onClick={handleGoToDetail} style={{ cursor: 'pointer' }}>
            <div className="card-media">
                {/* Lấy ảnh đầu tiên từ mảng images trong JSON mới */}
                <img
                    src={post.images?.[0] || "https://picsum.photos/400/300"}
                    alt={post.title}
                    className="card-img"
                />

                <div className="card-badge-price">
                    <span className="price-num">{post.price?.toLocaleString()}đ</span>
                </div>

                <button onClick={(e) => { e.stopPropagation(); }} className="btn-favorite">
                    <IconFavorite width="20" height="20" />
                </button>
            </div>

            <div className="card-body">
                <h3 className="card-title">{post.title || "Đang cập nhật..."}</h3>

                <div className="card-info-row">
                    <IconLocation width="14" color="#747780" />
                    <span className="address-text">{post.address}</span>
                </div>

                <div className="card-tags">
                    {post.amenities?.slice(0, 3).map((item) => (
                        <div className="tag-item" key={item.id}>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>

                <div className="card-footer">
                    <div className="amenities-summary">
                        <span>{post.area} m²</span>
                    </div>
                    <button className="btn-detail-arrow">
                        <IconArrowForward width="18" color="#1A73E8" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;