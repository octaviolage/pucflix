import React from 'react';
import { VideoContainer, ResponsiveIframe } from './styles';

function getId(url) {
  return url.slice(-36,)
}

function IframeResponsive({ url }) {
  const videoId = getId(url);
  return (
    <VideoContainer>
      <ResponsiveIframe
        title="Titulo do Iframe"
        src={`https://web.microsoftstream.com/embed/video/${videoId}?autoplay=false&amp;showinfo=true`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default IframeResponsive;
