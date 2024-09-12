// CSS Imports
import './App.css';

// Component Imports
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

const App = () => {
  return (
    <>
      <header>
        <h1>Jammming</h1>
      </header>

      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  );
};

export default App;
