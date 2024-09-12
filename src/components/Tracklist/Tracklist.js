import './Tracklist.css';

import Track from '../Track/Track';

const Tracklist = ({tracks}) => {
  return (
    <section>
      {tracks.map(track => {
        return <Track track={track} key={track.id} />
      })}
    </section>
  );
};

export default Tracklist;
