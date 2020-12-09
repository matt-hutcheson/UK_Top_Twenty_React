import './HitDetails.css'

const HitDetails = ({position, thumbnail, artist, track}) => {
  return (
    <div className="single-track">
      <li className="position">
        {position + 1}
      </li>
      <li className="thumbnail">
        <img src={thumbnail} alt="thumbnail" />
      </li>
      <div className="song-details">
        <li className="artist">
          Artist: {artist}
        </li>
        <li className="track">
          Track: {track}
        </li>
      </div>
    </div>
  )
}

export default HitDetails;
