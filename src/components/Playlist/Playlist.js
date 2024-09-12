import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({
  playlistTitle,
  playlistTracks,
  removeTrackFromPlaylist,
  changePlaylistTitle,
  savePlaylist
}) => {
  const handleChangePlaylistTitle = ({target}) => {
    changePlaylistTitle(target.value);
  };

  const handleSavePlaylist = _event => {
   const uris = playlistTracks.map(track => track.uri);

   savePlaylist(uris);
  };

  return (
    <section>
      <input type="text" value={playlistTitle} onChange={handleChangePlaylistTitle} />

      <Tracklist tracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist} />

      <button onClick={handleSavePlaylist}>Save to Spotify</button>
    </section>
  );
};

export default Playlist;
