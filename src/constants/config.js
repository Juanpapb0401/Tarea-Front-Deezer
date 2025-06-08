export const API_URL = "http://localhost:8080/api/v1";

export const API_CONTROLLERS = {
    PLAYLIST: "/playlists",
    DEEZER: "/deezer/search",
    PLAYLIST_TRACKS: (playlistId) => `/playlists/${playlistId}/tracks`,
}
