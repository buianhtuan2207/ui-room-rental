import React, { useState, useEffect } from 'react';
import './Room.css';
import Sidebar from '../../components/Sidebar';
import PropertyCard from '../../components/PropertyCard';
import Pagination from "../../components/Pagination";
import { IconChevronRight } from '../../assets/Icons';
import PostService from '../../services/postService';

function PostList() {
    const [posts, setPosts] = useState([]);                 // Dữ liệu gốc từ API
    const [filteredPosts, setFilteredPosts] = useState([]); // Dữ liệu sau khi lọc & sort
    const [loading, setLoading] = useState(true);

    // State cho Lọc
    const [filters, setFilters] = useState({
        price: null,
        area: null,
        amenities: []
    });

    // State cho Sắp xếp
    const [sortType, setSortType] = useState('popular');

    // State cho Phân trang
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // --- LOGIC PHÂN TRANG ---
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // Đây là danh sách bài đăng thực tế sẽ hiển thị trên 1 trang
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    // 1. Gọi API lấy dữ liệu lần đầu khi vào trang
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await PostService.getActivePosts();
                if (response && response.data) {
                    setPosts(response.data);
                    setFilteredPosts(response.data);
                }
            } catch (error) {
                console.error("Lỗi khi kết nối API:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // 2. Logic Lọc và Sắp xếp (Client-side)
    useEffect(() => {
        let data = [...posts];

        // Lọc theo khoảng giá
        if (filters.price) {
            data = data.filter(p => p.price >= filters.price.min && p.price <= filters.price.max);
        }

        // Lọc theo diện tích
        if (filters.area) {
            data = data.filter(p => p.area >= filters.area.min && p.area <= filters.area.max);
        }

        // Lọc theo mảng tiện ích
        if (filters.amenities.length > 0) {
            data = data.filter(p =>
                filters.amenities.every(amenityName =>
                    p.amenities?.some(a => a.name === amenityName)
                )
            );
        }

        // Sắp xếp dữ liệu
        switch (sortType) {
            case 'price-asc':
                data.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                data.sort((a, b) => b.price - a.price);
                break;
            case 'newest':
                data.sort((a, b) => b.id.localeCompare(a.id));
                break;
            case 'popular':
                data.sort((a, b) => (b.views || 0) - (a.views || 0));
                break;
            default:
                break;
        }

        setFilteredPosts(data);
        setCurrentPage(1); // Luôn về trang 1 khi lọc hoặc sort thay đổi
    }, [filters, posts, sortType]);

    // 3. Các hàm điều khiển
    const handleFilterChange = (type, value) => {
        setFilters(prev => ({ ...prev, [type]: value }));
    };

    const handleReset = () => {
        setFilters({ price: null, area: null, amenities: [] });
        setSortType('popular');
    };

    return (
        <main className="room-page-main">
            <div className="room-header-context">
                <nav className="breadcrumb">
                    <span>Trang chủ</span>
                    <IconChevronRight width="12" />
                    <span>Phòng</span>
                </nav>

                <div className="room-header-toolbar">
                    <div className="header-title-group">
                        <h1 className="text-4xl font-extrabold">Kết quả tìm kiếm</h1>
                        <p className="results-count">Hiển thị {filteredPosts.length} bài đăng được chọn lọc</p>
                    </div>

                    <div className="sort-container">
                        <select
                            className="room-sort-select"
                            value={sortType}
                            onChange={(e) => setSortType(e.target.value)}
                        >
                            <option value="popular">Sắp xếp: Phổ biến nhất</option>
                            <option value="price-asc">Giá: Thấp đến Cao</option>
                            <option value="price-desc">Giá: Cao đến Thấp</option>
                            <option value="newest">Mới nhất</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="room-layout-grid">
                <Sidebar
                    onFilterChange={handleFilterChange}
                    onReset={handleReset}
                />

                <section className="room-listing-section">
                    {loading ? (
                        <div className="loading-state">Đang tải danh sách phòng...</div>
                    ) : (
                        <div className="property-grid">
                            {currentPosts.length > 0 ? (
                                currentPosts.map((item) => (
                                    <PropertyCard key={item.id} data={item} />
                                ))
                            ) : (
                                <div className="no-results">
                                    <p>Không tìm thấy bài đăng nào phù hợp với bộ lọc.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Chỉ hiển thị phân trang nếu có nhiều hơn 1 trang */}
                    {totalPages >= 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    )}
                </section>
            </div>
        </main>
    );
}

export default PostList;