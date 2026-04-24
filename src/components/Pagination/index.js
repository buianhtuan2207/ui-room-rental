import React from 'react';
import './Pagination.css';
import { IconChevronRight } from '../../assets/Icons';

function Pagination({ currentPage, totalPages, onPageChange }) {

    // Hàm tạo mảng các số trang hiển thị
    const getPageNumbers = () => {
        const pages = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            // Logic hiển thị có dấu ba chấm (Đơn giản hóa)
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage, '...', totalPages);
            }
        }
        return pages;
    };

    return (
        <div className="pagination-container">
            {/* Nút Quay lại */}
            <button
                className={`page-nav-btn prev ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <IconChevronRight width="20" style={{ transform: 'rotate(180deg)' }} />
            </button>

            {/* Cụm số trang */}
            <div className="page-numbers-group">
                {getPageNumbers().map((number, index) => (
                    number === '...' ? (
                        <span key={`dots-${index}`} className="page-dots">...</span>
                    ) : (
                        <button
                            key={index}
                            className={`page-num-btn ${currentPage === number ? 'active' : ''}`}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    )
                ))}
            </div>

            {/* Nút Tiếp */}
            <button
                className={`page-nav-btn next ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                <IconChevronRight width="20" />
            </button>
        </div>
    );
}

export default Pagination;