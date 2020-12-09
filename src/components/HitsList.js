import HitDetails from './HitDetails.js';
import './HitsList.css'

const HitsList = ({hits}) => {

  if (!hits) {
    return null;
  }
  const hitElements = hits.map(hit => {
    return (
      <HitDetails className="hit-details" position={hit.position} thumbnail={hit.thumbnail} artist={hit.artist} track={hit.track} key={hit.position}/>
    )
  })



  return (
    <article className="hits-list">
      <ul className="ul-container">
        {hitElements}
      </ul>
    </article>

  )
}

export default HitsList;
