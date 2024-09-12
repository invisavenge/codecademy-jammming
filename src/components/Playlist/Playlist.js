import './Playlist.css';

import Tracklist from '../Tracklist/Tracklist';

const Playlist = ({playlistTitle, playlistTracks, removeTrackFromPlaylist}) => {
  return (
    <section>
      <h2>{playlistTitle}</h2>

      <Tracklist tracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist} />

      <button>Save to Spotify</button>
    </section>
  );
};

export default Playlist;
