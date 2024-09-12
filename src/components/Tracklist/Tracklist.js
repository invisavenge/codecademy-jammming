import './Tracklist.css';

import Track from '../Track/Track';

const Tracklist = ({tracks, addTrackToPlaylist, removeTrackFromPlaylist}) => {
  return (
    <section>
      {tracks.map(track => {
        return (
          <Track
            track={track}
            key={track.id}
            addTrackToPlaylist={addTrackToPlaylist}
            removeTrackFromPlaylist={removeTrackFromPlaylist}
          />
        );
      })}
    </section>
  );
};

export default Tracklist;
