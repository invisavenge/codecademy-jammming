import './Tracklist.css';

import Track from '../Track/Track';

const Tracklist = ({tracks, addTrackToPlaylist}) => {
  return (
    <section>
      {tracks.map(track => {
        return <Track track={track} key={track.id} addTrackToPlaylist={addTrackToPlaylist} />
      })}
    </section>
  );
};

export default Tracklist;
