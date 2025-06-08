import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import playlistService from '../services/playlistService';

const P2 = () => {

  const { playlistId } = useParams();

  const [tracks, setTracks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    playlistService.getPlaylistTracks(playlistId)
      .then(data => {
        setTracks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error al cargar las canciones');
        setLoading(false);
      });
  }, [playlistId]);

  const handleAddTracks = () => {
    navigate(`/playlist/${playlistId}/search`);
  };

  const handleRemoveTrack = (trackId) => {
    playlistService.removeTrackFromPlaylist(playlistId, trackId)
      .then(() => {
        setTracks(tracks.filter(track => track.id !== trackId));
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error al eliminar la canción');
      });
  };


  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Playlist</h2>
      <button onClick={handleAddTracks}>Agregar canciones</button>
      
      <div>
        {tracks.length === 0 ? (
          <p>No hay canciones en esta playlist</p>
        ) : (
          tracks.map((track) => (
            <div key={track.id}>
              <h3>{track.title}</h3>
              <p>Artista: {track.artistName}</p>
              <p>Álbum: {track.albumTitle}</p>
              <button onClick={() => handleRemoveTrack(track.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default P2; 