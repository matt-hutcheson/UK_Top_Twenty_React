import {useState, useEffect} from 'react';
import HitsList from '../components/HitsList.js';
import './HitsContainer.css'

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
    return apiData.map((hit, index) => {
      return ({
        position: index,
        thumbnail: hit["im:image"][2].label,
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
    <div className="hits-container">
      <h1>UK Top 20</h1>
      <HitsList hits={top20}/>
    </div>

  )
}

export default HitsContainer;
