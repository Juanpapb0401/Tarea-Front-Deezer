import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PlaylistCard from '../components/PlaylistCard';
import playlistService from '../services/playlistService';

const PlaylistsScreen = () => {

  const [playlists, setPlaylists] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    playlistService.getAllPlaylists()
      .then(data => {
        setPlaylists(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error al cargar las playlists');
        setLoading(false);
      });
  }, []);

  const handlePlaylistClick = (playlistId) => {
    navigate(`/playlist/${playlistId}`);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Mis Playlists</h2>
      {playlists.length === 0 ? (
        <p>No hay playlists disponibles</p>
      ) : (
        playlists.map((playlist) => (
          <PlaylistCard 
            key={playlist.id} 
            playlist={playlist}
            onClick={() => handlePlaylistClick(playlist.id)}
          />
        ))
      )}
    </div>
  );
};

export default PlaylistsScreen; 