import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlaylistsScreen from './screens/PlaylistsScreen';
import PlaylistTracksScreen from './screens/PlaylistTracksScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Deezer Playlists</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<PlaylistsScreen />} />
            <Route path="/playlist/:playlistId" element={<PlaylistTracksScreen />} />
            <Route path="/playlist/:playlistId/search" element={<SearchScreen />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
