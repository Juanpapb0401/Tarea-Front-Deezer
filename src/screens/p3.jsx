import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import deezerService from '../services/deezerService';
import playlistService from '../services/playlistService';

const SearchScreen = () => {

  const { playlistId } = useParams();

  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const results = await deezerService.searchTracks(searchQuery);
      setSearchResults(results.data || []);
    } catch (error) {
      console.error('Error searching tracks:', error);
      setError('Error al buscar canciones');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTrack = async (track) => {
    try {
      const trackData = {
        title: track.title,
        duration: track.duration,
        rank: track.rank,
        preview: track.preview,
        artistName: track.artist.name,
        albumTitle: track.album.title,
        artistPicture: track.artist.picture,
        albumCover: track.album.cover
      };

      await playlistService.addTrackToPlaylist(playlistId, trackData);

      navigate(`/playlist/${playlistId}`);
    } catch (error) {
      console.error('Error adding track:', error);
      setError('Error al agregar la canción');
    }
  };

  return (
    <div>
      <h2>Buscar Canciones</h2>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar canciones..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <div>{error}</div>}

      <div>
        {searchResults.length === 0 ? (
          <p>No se encontraron resultados</p>
        ) : (
          searchResults.map((track) => (
            <div key={track.id}>
              <h3>{track.title}</h3>
              <p>Artista: {track.artist.name}</p>
              <p>Álbum: {track.album.title}</p>
              <button onClick={() => handleAddTrack(track)}>Agregar a la playlist</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchScreen; 