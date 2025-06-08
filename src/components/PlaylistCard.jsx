import React from "react";
import { useNavigate } from "react-router-dom";

const PlaylistCard = ({ playlist }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/playlist/${playlist.id}`);
    }

    return (
        <div className="playlist-card" onClick={handleClick}>
            <h2>{playlist.name}</h2>
            <h4>{playlist.mood}</h4>
        </div>
    )
};

export default PlaylistCard;