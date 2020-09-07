import React from 'react';
import { VideoCardContainer } from './styles';

function title(titulo) {
  if(titulo){
    if (titulo.length > 30){
      return titulo.slice(0,30) + '...';
    }
    else{
      return titulo;
    }
  }
}

function VideoCard({ videoTitle, videoURL, image }) {
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      style={{ borderColor: '#005983' }}
      title={videoTitle}
    >
      ▶{(' ')}{title(videoTitle)}
    </VideoCardContainer>
  );
}

export default VideoCard;
