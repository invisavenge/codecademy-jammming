import { useState } from 'react';

// CSS Imports
import './App.css';

// Component Imports
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
  const mockSearchResults = [
    {
      name: 'Smells Like Teen Spirit',
      artist: 'Nirvana',
      album: 'Nevermind',
      id: 1,
      uri: 'https://open.spotify.com/track/4CeeEOM32jQcH3eN9Q2dGj?si=9de86f92078344e9'
    },
    {
      name: 'Californication',
      artist: 'Red Hot Chili Peppers',
      album: 'Californication',
      id: 2,
      uri: 'https://open.spotify.com/track/48UPSzbZjgc449aqz8bxox?si=8e95b8ff5897456d'
    }
  ]; // Remove later

  const mockPlaylistTracks = [
    {
      name: 'Not Like Us',
      artist: 'Kendrick Lamar',
      album: 'Not Like Us',
      id: 3,
      uri: 'https://open.spotify.com/track/6AI3ezQ4o3HUoP6Dhudph3?si=570d523944024cb2'
    },
    {
      name: 'Many Men (Wish Death)',
      artist: '50 Cent',
      album: 'Get Rich or Die Tryin',
      id: 4,
      uri: 'https://open.spotify.com/track/5STdMlrBf6pqWiNE7WqxSi?si=1631277f95104ebb'
    }
  ]; // Remove later

  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Title');
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylistTracks);

  const addSearchResultToPlaylist = track => {
    if (playlistTracks.some(existingTrack => existingTrack.id === track.id)) {
      return; // The track already exists, skip
    }

    setPlaylistTracks(prevTracks => {
      return [...prevTracks, track];
    });
  };

  const removeTrackFromPlaylist = track => {
    setPlaylistTracks(prevTracks => {
      return prevTracks.filter(currentTrack => currentTrack.id !== track.id);
    });
  };

  const changePlaylistTitle = playlistTitle => {
    setPlaylistTitle(playlistTitle);
  };

  const savePlaylist = uris => {
    if (uris.length !== 0) {
      console.log(uris);
      // Reset title and tracks
      setPlaylistTitle('New Playlist');
      setPlaylistTracks([]);
    }
  };

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>

      <SearchBar />

      <SearchResults
        searchResults={searchResults}
        addSearchResultToPlaylist={addSearchResultToPlaylist}
      />

      <Playlist
        playlistTitle={playlistTitle}
        playlistTracks={playlistTracks}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        changePlaylistTitle={changePlaylistTitle}
        savePlaylist={savePlaylist}
      />
    </>
  );
};

export default App;
