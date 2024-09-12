import './SearchResults.css';

import Tracklist from '../Tracklist/Tracklist';

const SearchResults = ({searchResults}) => {
  return (
    <section>
      <h2>Results</h2>

      <Tracklist tracks={searchResults} />
    </section>
  );
};

export default SearchResults;
