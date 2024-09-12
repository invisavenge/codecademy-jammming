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
      id: 1
    },
    {
      name: 'Californication',
      artist: 'Red Hot Chili Peppers',
      album: 'Californication',
      id: 2
    }
  ]; // Remove later

  const mockPlaylistTracks = [
    {
      name: 'Not Like Us',
      artist: 'Kendrick Lamar',
      album: 'Not Like Us',
      id: 3
    },
    {
      name: 'Many Men (Wish Death)',
      artist: '50 Cent',
      album: 'Get Rich or Die Tryin',
      id: 4
    }
  ]; // Remove later

  const [searchResults, setSearchResults] = useState(mockSearchResults);
  const [playlistTitle, setPlaylistTitle] = useState('Playlist Title');
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylistTracks);

  const addSearchResultToPlaylist = (track) => {
    if (playlistTracks.some(existingTrack => existingTrack.id === track.id)) {
      return; // The track already exists, skip
    }

    setPlaylistTracks(prevTracks => {
      return [...prevTracks, track];
    });
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
      />
    </>
  );
};

export default App;
