import api from './axios';

// Định nghĩa endpoint gốc cho các dịch vụ liên quan đến tiện ích
const ENDPOINT = '/amenities';

const AmenityService = {

    getAmenities: async () => {
        try {
            const response = await api.get(ENDPOINT);
            return response.data;
        } catch (error) {
            console.error("Error fetching amenities list:", error);
            throw error;
        }
    },

    getAmenityById: async (id) => {
        try {
            const response = await api.get(`${ENDPOINT}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching amenity with ID ${id}:`, error);
            throw error;
        }
    }
};

export default AmenityService;