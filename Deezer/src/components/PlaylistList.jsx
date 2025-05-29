import React, { useState, useEffect } from 'react';
import PlaylistCard from './PlaylistCard';
import playlistService from '../services/playlistService';

const PlaylistList = () => {

  const [playlists, setPlaylists] = useState([]);

  const [loading, setLoading] = useState(true);
  
  const [error, setError] = useState(null);

  const fetchPlaylists = async () => {
    try {
      const data = await playlistService.getAllPlaylists();
      setPlaylists(data);
    } catch (error) {
      console.error('Error fetching playlists:', error);
      setError('Error al cargar las playlists');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylists();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
    <h2>Mis Playlists</h2>
      {playlists.length === 0 ? (
        <p>No hay playlists disponibles</p>
      ) : (
        playlists.map((playlist) => (
          <PlaylistCard 
            key={playlist.id} 
            playlist={{
              id: playlist.id,
              name: playlist.name,
              mood: playlist.mood,
              tracks: playlist.tracks || []
            }} 
          />
        ))
      )}
    </>

  );
};

export default PlaylistList; 