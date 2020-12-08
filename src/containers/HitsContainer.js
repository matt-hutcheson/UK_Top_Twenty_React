import {useState, useEffect} from 'react';
import HitsList from '../components/HitsList';

const HitsContainer = () => {

  const [apiData, setApiData] = useState({});
  const [top20, setTop20] = useState([]);

  const getHits = () => {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(res => res.json())
    .then(data => setApiData(data.feed.entry))
  };

  const extractData = () => {
    if (Object.keys(apiData).length === 0) {
      return null;
    }
    console.log(apiData)
    return apiData.map((hit, index) => {
      return ({
        position: index,
        artist: hit["im:artist"].label,
        track: hit["im:name"].label
      });
    })
  };

  useEffect(() => {
    setTop20(extractData());
  }, [apiData]);

  useEffect(() => {
    getHits();
  }, []);

  return (
    <>
      <h2>HitsContainer</h2>
      <HitsList hits={top20}/>
    </>

  )
}

export default HitsContainer;
