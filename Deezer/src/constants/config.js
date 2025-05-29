export const API_BASE_URL = 'http://localhost:8080/api/v1';

export const API_ENDPOINTS = {
  PLAYLISTS: '/playlists',
  SEARCH: '/deezer/search',
  PLAYLIST_TRACKS: (playlistId) => `/playlists/${playlistId}/tracks`,
}; 