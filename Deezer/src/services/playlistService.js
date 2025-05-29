import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../constants/config';

const playlistService = {
  
  getAllPlaylists: async () => {
    const { data } = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.PLAYLISTS}`);
    return data;
  },

  createPlaylist: async (playlistData) => {
    const { data } = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.PLAYLISTS}`, playlistData);
    return data;
  },

  deletePlaylist: async (playlistId) => {
    await axios.delete(`${API_BASE_URL}${API_ENDPOINTS.PLAYLISTS}/${playlistId}`);
  },

  getPlaylistTracks: async (playlistId) => {
    const { data } = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.PLAYLIST_TRACKS(playlistId)}`);
    return data;
  },

  addTrackToPlaylist: async (playlistId, trackData) => {
    await axios.post(`${API_BASE_URL}${API_ENDPOINTS.PLAYLISTS}/${playlistId}/tracks`, trackData);
  },

  removeTrackFromPlaylist: async (playlistId, trackId) => {
    await axios.delete(`${API_BASE_URL}${API_ENDPOINTS.PLAYLISTS}/${playlistId}/tracks/${trackId}`);
  }
};

export default playlistService; 