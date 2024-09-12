import './SearchBar.css';

const SearchBar = ({searchSpotify}) => {
  const handleSearchSpotify = _event => {
    const searchTerm = document.querySelector('#search').value;

    searchSpotify(searchTerm);
  };

  return (
    <section>
      <input id="search" type="text" placeholder="Enter a song" />
      <button onClick={handleSearchSpotify}>Search</button>
    </section>
  );
};

export default SearchBar;
