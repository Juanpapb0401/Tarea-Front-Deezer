import axios from "axios";
import { API_URL, API_CONTROLLERS } from "../constants/config";

const playlistService = {

    getAllPlaylists: async () => {
        const {data} = await axios.get(`${API_URL}${API_CONTROLLERS.PLAYLIST}`);
        return data;
    },

    getPlaylistById: async (playlistId) => {
        const {data} = await axios.get(`${API_URL}${API_CONTROLLERS.PLAYLIST}/${playlistId}`);
        return data;
    },

    addTrackToPlaylist: async (playlistId, trackData) => {
        await axios.post(`${API_URL}${API_CONTROLLERS.PLAYLIST}/${playlistId}/tracks`, trackData);
        
    },

    removeTrackFromPlaylist: async (playlistId, trackId) => {
        await axios.delete(`${API_URL}${API_CONTROLLERS.PLAYLIST}/${playlistId}/tracks/${trackId}`);
        
    },

    getPlaylistTracks: async (playlistId) => {
        const {data} = await axios.get(`${API_URL}${API_CONTROLLERS.PLAYLIST_TRACKS(playlistId)}`);
        return data;
    }
};

export default playlistService;
