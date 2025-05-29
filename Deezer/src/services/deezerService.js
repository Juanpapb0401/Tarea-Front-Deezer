import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../constants/config';

const deezerService = {
  
  searchTracks: async (query) => {
    const { data } = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.SEARCH}?q=${encodeURIComponent(query)}`);
    return data;
  }
};

export default deezerService; 