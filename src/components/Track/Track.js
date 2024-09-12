import './Track.css';

const Track = ({track, addTrack}) => {
  const {name, artist, album} = track;

  const handleAddTrack = (_event) => {
    addTrack(track);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <button onClick={handleAddTrack}>+</button>
    </div>
  )
};

export default Track;
