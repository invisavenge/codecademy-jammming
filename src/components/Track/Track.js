import './Track.css';

const Track = ({track}) => {
  const {name, artist, album} = track;

  return (
    <div>
      <p>{name}</p>
      <p>{artist}</p>
      <p>{album}</p>
    </div>
  )
};

export default Track;
