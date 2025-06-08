import axios from 'axios';
import { API_URL, API_CONTROLLERS } from '../constants/config';

const deezerService = {
  
  searchTracks: async (query) => {
    const { data } = await axios.get(`${API_URL}${API_CONTROLLERS.DEEZER}?q=${encodeURIComponent(query)}`);
    return data;
  }
};

export default deezerService; 