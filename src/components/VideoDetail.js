import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui active inverted dimmer" style={{ height: '50vh' }}>
        <div className="ui text loader" style={{ alignSelf: 'center' }}>
          Loading...
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          title="video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
