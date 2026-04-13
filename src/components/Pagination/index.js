import React from 'react';
import './Pagination.css';
import { IconChevronRight } from '../../assets/Icons';

function Pagination() {
    return (
        <div className="pagination-container">
            {/* Nút Quay lại */}
            <button className="page-nav-btn prev">
                <IconChevronRight width="20" style={{ transform: 'rotate(180deg)' }} />
            </button>

            {/* Cụm số trang */}
            <div className="page-numbers-group">
                <button className="page-num-btn active">1</button>
                <button className="page-num-btn">2</button>
                <button className="page-num-btn">3</button>
                <span className="page-dots">...</span>
                <button className="page-num-btn">8</button>
            </div>

            {/* Nút Tiếp */}
            <button className="page-nav-btn next">
                <IconChevronRight width="20" />
            </button>
        </div>
    );
}

export default Pagination;