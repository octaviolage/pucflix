import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import Slider, { SliderItem } from './components/Slider';
import ModalIframe from '../Modal';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.gsx$sigla.$t;
  const categoryColor = '#005983';
  const categoryExtraLink = category.gsx$nome.$t;
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
              <ExtraLink style={{ color: 'white' }} href={categoryExtraLink.url} target="_blank">
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
            <SliderItem key={video.gsx$nome.$t}>
              <ModalIframe
                aula={video}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
