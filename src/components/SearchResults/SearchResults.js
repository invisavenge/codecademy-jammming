import './SearchResults.css';

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({searchResults, addTrack}) => {
  return (
    <section>
      <h2>Results</h2>

      <Tracklist tracks={searchResults} addTrack={addTrack} />
    </section>
  );
};

export default SearchResults;
