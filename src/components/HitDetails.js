const HitDetails = ({position, artist, track}) => {
  return (
    <>
      <p>
        Position: {position + 1}
      </p>
      <p>
        Artist: {artist}
      </p>
      <p>
        Track: {track}
      </p>
    </>
  )
}

export default HitDetails;
