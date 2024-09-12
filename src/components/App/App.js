import { useState, useEffect } from 'react';

// CSS Imports
import './App.css';

// Component Imports
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

// Utility Imports
import Spotify from '../../util/Spotify/Spotify';
const spotify = new Spotify();
spotify.getAccessToken();

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Title');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchSpotify = async term => {
    try {
      setSearchResults(await spotify.search(term));
    } catch (error) {
      setSearchResults([]);
      console.error(error.message);
    }
  };

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

  const savePlaylist = async uris => {
    try {
      await spotify.savePlaylist(playlistTitle, uris);

      // Reset title and tracks
      setPlaylistTitle('New Playlist');
      setPlaylistTracks([]);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>

      <SearchBar searchSpotify={searchSpotify} />

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
