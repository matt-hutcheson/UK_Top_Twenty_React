import {useState, useEffect} from 'react';

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
    <h2>HitsContainer</h2>
  )
}

export default HitsContainer;
