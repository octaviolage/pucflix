import React from 'react';
import { VideoCardContainer } from './styles';

function title(titulo) {
  if (titulo.length > 24){
    return titulo.slice(0,20) + '...';
  }
  else{
    return titulo;
  }
}

function VideoCard({ videoTitle, videoURL, categoryColor, image }) {
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    >
      <span style={{ color: 'white' }}>{title(videoTitle)}</span>
    </VideoCardContainer>
  );
}

export default VideoCard;
