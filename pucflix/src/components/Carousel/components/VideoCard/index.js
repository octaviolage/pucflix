import React from 'react';
import { VideoCardContainer } from './styles';

function VideoCard({ videoTitle, videoURL, categoryColor, image }) {
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <span style={{ color: 'white' }}>{videoTitle}</span>
    </VideoCardContainer>
  );
}

export default VideoCard;
