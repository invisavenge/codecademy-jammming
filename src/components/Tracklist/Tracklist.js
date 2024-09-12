import './Tracklist.css';

import Track from '../Track/Track';

const Tracklist = ({tracks, addTrack}) => {
  return (
    <section>
      {tracks.map(track => {
        return <Track track={track} key={track.id} addTrack={addTrack} />
      })}
    </section>
  );
};

export default Tracklist;
