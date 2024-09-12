import './Track.css';

const Track = ({track, addTrackToPlaylist}) => {
  const {name, artist, album} = track;

  const handleAddTrackToPlaylist = (_event) => {
    addTrackToPlaylist(track);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>
      <button onClick={handleAddTrackToPlaylist}>+</button>
    </div>
  )
};

export default Track;
