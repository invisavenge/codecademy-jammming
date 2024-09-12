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
  ];

  const [searchResults, setSearchResults] = useState(mockSearchResults);

  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>

      <SearchBar />
      <SearchResults searchResults={searchResults} />
      <Playlist />
    </>
  );
};

export default App;
