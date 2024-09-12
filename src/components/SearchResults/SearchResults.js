import './SearchResults.css';

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({searchResults, addSearchResultToPlaylist}) => {
  return (
    <section>
      <h2>Results</h2>

      <Tracklist tracks={searchResults} addTrackToPlaylist={addSearchResultToPlaylist} />
    </section>
  );
};

export default SearchResults;
