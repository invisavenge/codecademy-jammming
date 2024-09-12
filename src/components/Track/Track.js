import './Track.css';

const Track = ({track, addTrackToPlaylist, removeTrackFromPlaylist}) => {
  const {name, artist, album} = track;

  const handleAddTrackToPlaylist = _event => {
    addTrackToPlaylist(track);
  };

  const handleRemoveTrackFromPlaylist = _event => {
    removeTrackFromPlaylist(track);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>

      {addTrackToPlaylist && <button onClick={handleAddTrackToPlaylist}>+</button>}
      {removeTrackFromPlaylist && <button onClick={handleRemoveTrackFromPlaylist}>-</button>}
    </div>
  )
};

export default Track;
