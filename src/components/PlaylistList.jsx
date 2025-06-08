import React, { useState, useEffect } from "react";
import playlistService from "../services/playlistService";
import PlaylistCard from "./PlaylistCard";

const PlaylistList = () => {

    const [playlists, setPlaylists] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);


    const fetchPlaylists = async () => {
        try {
            const response = await playlistService.getAllPlaylists();
            setPlaylists(response);
        } catch (error) {
            console.error('Error in component:', error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
        <h1>Playlists</h1>
        <div className="playlist-list">
            {Array.isArray(playlists) && playlists.length > 0 ? (
                playlists.map((playlist) => (
                    <PlaylistCard key={playlist.id} playlist={playlist} />
                ))
            ) : (
                <div>No playlists available</div>
            )}
        </div>
        </>
    )

};

export default PlaylistList;