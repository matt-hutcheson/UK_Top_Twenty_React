import HitDetails from './HitDetails';

const HitsList = ({hits}) => {

  if (!hits) {
    return null;
  }
  const hitElements = hits.map(hit => {
    return (
      <HitDetails position={hit.position} artist={hit.artist} track={hit.track} />
    )
  })



  return (
    <>
      {hitElements}
    </>

  )
}

export default HitsList;
