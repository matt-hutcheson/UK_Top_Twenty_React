import {useState, useEffect} from 'react';
import HitsList from '../components/HitsList';

const HitsContainer = () => {

  const [data, setData] = useState({})

  const getHits = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(data => setData(data))
  }

  useEffect(() => {
    getHits()
  }, [])

  return (
    <>
      <h2>HitsContainer</h2>
      <HitsList />
    </>

  )
}

export default HitsContainer;
