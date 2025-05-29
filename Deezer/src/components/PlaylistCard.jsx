import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/playlist/${playlist.id}`);
  };

  return (
    <div onClick={handleClick}>
      <div>
        <h3>{playlist.name}</h3>
        <p>{playlist.mood}</p>
      </div>
    </div>
  );
};

export default PlaylistCard; 