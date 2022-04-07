import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchTerms = [
    'kpop',
    'league of legends',
    'girls generation',
    'taeyeon',
    'sejeong',
    'bts',
    'indie folk',
    'kindie',
  ];
  const random = searchTerms[Math.floor(Math.random() * searchTerms.length)];

  const [videos, search] = useVideos(random);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSearch={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div
            className="five wide column"
            style={{ height: '50vh', overflowX: 'hidden' }}
          >
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
