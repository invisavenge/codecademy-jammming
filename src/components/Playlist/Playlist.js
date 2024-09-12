import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({playlistTitle, playlistTracks, removeTrackFromPlaylist, changePlaylistTitle}) => {
  const handleChangePlaylistTitle = ({target}) => {
    changePlaylistTitle(target.value);
  };

  return (
    <section>
      <input type="text" value={playlistTitle} onChange={handleChangePlaylistTitle} />

      <Tracklist tracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist} />

      <button>Save to Spotify</button>
    </section>
  );
};

export default Playlist;
