import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const videoCard = video.snippet.title
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&');

  // const selectedVideo = () => {
  //   onVideoSelect(video);
  // };

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      {/* <div onClick={selectedVideo} className="video-item item"> */}
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{videoCard}</div>
      </div>
    </div>
  );
};

export default VideoItem;
