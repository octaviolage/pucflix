import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.sigla;
  const categoryColor = '#005983';
  const categoryExtraLink = category.nome;
  const imagem = category.imagem
  const { aulas } = category;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
      <>
        <Title style={{ backgroundColor: categoryColor || 'red' }}>
          {categoryTitle}
        </Title>
        {categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink}
            </ExtraLink>
            )}
      </>
      )}
      <Slider>
        {aulas.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.nome}>
              <VideoCard
                videoTitle={video.nome}
                videoURL={video.url}
                categoryColor={categoryColor}
                image={imagem}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
